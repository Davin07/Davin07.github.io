import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle, X } from 'lucide-react';

const Toast: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto-dismiss after 5s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      onClick={onClose}
      className="absolute bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg shadow-2xl backdrop-blur-md cursor-pointer hover:bg-green-500/20 transition-colors"
    >
      <CheckCircle className="w-5 h-5" />
      <span className="text-sm font-mono">{message}</span>
      <X className="w-4 h-4 opacity-50 hover:opacity-100 ml-2" />
    </motion.div>
  );
};

const TerminalContact: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "Initializing secure handshake protocol...",
    "Target: davin.sthomas07@gmail.com",
    "Connection established [200 OK]",
    "> Enter identification (Name):",
  ]);
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

  // Auto-focus input ONLY when processing finishes (true -> false)
  useEffect(() => {
    if (prevProcessing.current && !isProcessing && inputRef.current) {
        inputRef.current.focus();
    }
    prevProcessing.current = isProcessing;
  }, [isProcessing]);

  const addToHistory = (text: string, isUser = false) => {
      setHistory(prev => [...prev, isUser ? `user@guest:~$ ${text}` : `> ${text}`]);
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
            setHistory([
                "Initializing secure handshake protocol...",
                "Target: davin.sthomas07@gmail.com",
                "Connection established [200 OK]",
                "> Enter identification (Name):"
            ]);
        } else {
            addToHistory("Error: Session closed. Type 'reset' to restart.");
        }
        return;
    }

    if (currentStep === 'name') {
        processStep(async () => {
            setFormData(prev => ({ ...prev, name: val }));
            setCurrentStep('subject');
            addToHistory(`Identity confirmed: ${val}`);
            await new Promise(r => setTimeout(r, 400));
            addToHistory("Enter transmission subject:");
        });
    } else if (currentStep === 'subject') {
        processStep(async () => {
            setFormData(prev => ({ ...prev, subject: val }));
            setCurrentStep('message');
            addToHistory(`Header set: ${val}`);
            await new Promise(r => setTimeout(r, 400));
            addToHistory("Enter message payload:");
        });
    } else if (currentStep === 'message') {
        processStep(async () => {
            setFormData(prev => ({ ...prev, message: val }));
            setCurrentStep('done');
            
            addToHistory("Payload received.");
            await new Promise(r => setTimeout(r, 600));
            addToHistory("Compiling packet...");
            
            await new Promise(r => setTimeout(r, 800));
            addToHistory("Opening default mail client...");
            
            await new Promise(r => setTimeout(r, 800));
            
            // Construct mailto link
            const { name, subject, message: msg } = { ...formData, message: val };
            const body = `${msg}\n\n--\n${name}`;
            const mailtoLink = `mailto:davin.sthomas07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.location.href = mailtoLink;
            
            addToHistory("STATUS: HANDOFF COMPLETE");
            await new Promise(r => setTimeout(r, 400));
            addToHistory("Session terminated. Type 'reset' to restart.");
            
            setShowToast(true);
        });
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
               Execute <span className="text-primary">Handshake</span>
             </h2>
             <p className="text-slate-400 font-mono text-sm tracking-widest">Direct line to the console.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/80 rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(56,189,248,0.1)] backdrop-blur-xl relative"
        >
          {/* Header */}
          <div className="bg-slate-900/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">secure_shell — bash</div>
            <div className="w-10"></div>
          </div>

          {/* Terminal Output */}
          <div 
            ref={scrollRef}
            className="p-6 h-[350px] overflow-y-auto font-mono text-sm space-y-2 bg-[#050505] text-slate-300 relative" 
            onClick={() => !isProcessing && inputRef.current?.focus()}
          >
            {history.map((line, i) => (
              <div key={i} className={`${line.includes('user@guest') ? 'text-white' : 'text-primary'}`}>
                {line}
              </div>
            ))}
            
            {/* Input Line */}
            <div className={`flex items-center gap-2 mt-2 group ${isProcessing ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                <span className="text-green-500">user@guest:~$</span>
                <form onSubmit={handleCommand} className="flex-1">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-white focus:ring-0 p-0 caret-primary"
                        autoComplete="off"
                        disabled={isProcessing}
                    />
                </form>
            </div>

            {/* Loading Indicator */}
            {isProcessing && (
                <div className="text-primary animate-pulse mt-2">
                    &gt; _
                </div>
            )}
            
            <AnimatePresence>
                {showToast && (
                    <Toast 
                        message="Transmission Successful. Protocol Closed."
                        onClose={() => setShowToast(false)} 
                    />
                )}
            </AnimatePresence>
          </div>
        </motion.div>
        
        <div className="mt-8 text-center">
            <a href="mailto:davin.sthomas07@gmail.com" className="text-slate-500 hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest border-b border-transparent hover:border-primary">
                Or send manual email packet
            </a>
        </div>

      </div>
    </section>
  );
};

export default TerminalContact;