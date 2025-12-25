import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '~/about', href: '#about' },
    { name: '~/experience', href: '#experience' },
    { name: '~/skills', href: '#skills' },
    { name: '~/projects', href: '#projects' },
    { name: '~/contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-surface rounded-lg border border-border flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-colors">
               <Code2 className="w-5 h-5 text-primary" />
               <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white leading-none">
                Davin <span className="text-primary">S Thomas</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono tracking-wider">SOFTWARE_ENGINEER</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-surface/50 border border-white/5 p-1 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-mono text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="/DavinSThomas-SWE.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-300 border border-slate-700 hover:border-primary hover:text-white rounded-lg transition-all group"
            >
              <FileText className="w-4 h-4 group-hover:text-primary transition-colors" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-400 hover:text-primary hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                  href="/DavinSThomas-SWE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-slate-400 hover:text-primary hover:bg-white/5 rounded-md mt-2 border-t border-white/5 pt-4"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume.pdf</span>
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;