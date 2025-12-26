import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import TerminalContact from './components/TerminalContact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <main className="relative min-h-screen text-slate-200">
      <ParticleBackground />
      {/* Mesh Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <TerminalContact />
        
        <footer className="py-8 text-center text-slate-500 text-xs sm:text-sm border-t border-border bg-background/80 backdrop-blur-md">
          <p className="font-mono mb-2">
            <span className="text-primary">System.out.println</span>("© {new Date().getFullYear()} Davin S Thomas");
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <span className="font-mono text-xs uppercase tracking-wider">// Generated with coffee and AI</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;