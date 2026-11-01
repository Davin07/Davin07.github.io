import React, { useState, useRef, useEffect } from 'react';

const OPENING = ['> Name:'];

const TerminalContact: React.FC = () => {
  const [history, setHistory] = useState<string[]>(OPENING);
  const [inputVal, setInputVal] = useState('');
  const [currentStep, setCurrentStep] = useState<'name' | 'subject' | 'message' | 'done'>('name');
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevProcessing = useRef(isProcessing);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isProcessing]);

  // Focus the line only when a step finishes (true -> false)
  useEffect(() => {
    if (prevProcessing.current && !isProcessing && inputRef.current) {
      inputRef.current.focus();
    }
    prevProcessing.current = isProcessing;
  }, [isProcessing]);

  const addToHistory = (text: string, isUser = false) => {
    setHistory((prev) => [...prev, isUser ? `guest@davin:~$ ${text}` : `> ${text}`]);
  };

  const processStep = async (stepFn: () => Promise<void>) => {
    setIsProcessing(true);
    await stepFn();
    setIsProcessing(false);
  };

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputVal.trim();
    if (!val) return;

    addToHistory(val, true);
    setInputVal('');

    if (currentStep === 'done') {
      if (val.toLowerCase() === 'reset') {
        setCurrentStep('name');
        setFormData({ name: '', subject: '', message: '' });
        setShowToast(false);
        setHistory(OPENING);
      } else {
        addToHistory('Session closed. Type reset to write another.');
      }
      return;
    }

    if (currentStep === 'name') {
      processStep(async () => {
        setFormData((prev) => ({ ...prev, name: val }));
        setCurrentStep('subject');
        await new Promise((r) => setTimeout(r, 400));
        addToHistory('Subject:');
      });
    } else if (currentStep === 'subject') {
      processStep(async () => {
        setFormData((prev) => ({ ...prev, subject: val }));
        setCurrentStep('message');
        await new Promise((r) => setTimeout(r, 400));
        addToHistory('Message:');
      });
    } else if (currentStep === 'message') {
      processStep(async () => {
        setFormData((prev) => ({ ...prev, message: val }));
        setCurrentStep('done');

        addToHistory('Composing.');
        await new Promise((r) => setTimeout(r, 600));
        addToHistory('Opening your mail client.');
        await new Promise((r) => setTimeout(r, 800));

        const { name, subject, message: msg } = { ...formData, message: val };
        const body = `${msg}\n\n--\n${name}`;
        const mailtoLink = `mailto:davin.sthomas07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        await new Promise((r) => setTimeout(r, 400));
        addToHistory('Session closed. Type reset to write another.');

        setShowToast(true);
      });
    }
  };

  const stepLabel =
    currentStep === 'name'
      ? 'Your name'
      : currentStep === 'subject'
        ? 'The subject'
        : currentStep === 'message'
          ? 'The message'
          : 'Type reset to start another message';

  return (
    <section id="contact" className="section section--close contact" aria-labelledby="contact-head">
      <div className="container contact__grid">
        <div>
          <h2 id="contact-head">Write to me</h2>
          <p className="lead">
            Three lines in the console, then your mail client opens with the message.
          </p>
          <a className="contact__mail" href="mailto:davin.sthomas07@gmail.com">
            davin.sthomas07@gmail.com
          </a>
        </div>

        <div className="console" role="region" aria-label="Message console">
          <div className="console__bar">
            <span>davin.sthomas07@gmail.com</span>
            <span>session open</span>
          </div>

          <div
            className="console__log"
            ref={scrollRef}
            role="log"
            aria-live="polite"
            onClick={() => !isProcessing && inputRef.current?.focus()}
          >
            {history.map((line, i) => (
              <div
                key={`${i}-${line}`}
                className={`console__line${line.startsWith('guest@davin') ? ' console__line--in' : ''}`}
              >
                {line}
              </div>
            ))}

            {isProcessing && <div className="console__line">guest@davin:~$ _</div>}

            {showToast && (
              <p className="console__status" role="status">
                Mail client opened.
              </p>
            )}
          </div>

          <form className="console__form" onSubmit={handleCommand}>
            <label className="visually-hidden" htmlFor="console-input">{stepLabel}</label>
            <span className="console__prompt" aria-hidden="true">guest@davin:~$</span>
            <input
              id="console-input"
              ref={inputRef}
              className="console__input"
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              autoComplete="off"
              disabled={isProcessing}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default TerminalContact;
