import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, Cpu, Code2, Zap, Linkedin, Github, Mail, Mouse, ChevronDown } from 'lucide-react';

const CodeWindow: React.FC = () => {
    return (
        <div className="w-full bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm leading-relaxed relative group">
            {/* Glow effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            {/* Title Bar */}
            <div className="bg-[#161b22] px-4 py-3 flex items-center gap-4 border-b border-slate-800 relative z-10">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-slate-500 flex items-center gap-2">
                    <Code2 className="w-3 h-3" />
                    <span>SoftwareEngineer.java</span>
                </div>
            </div>

            {/* Code Content */}
            <div className="p-6 text-slate-300 relative z-10 overflow-x-auto">
                <div className="flex">
                    <div className="text-slate-600 select-none pr-4 text-right border-r border-slate-800 mr-4">
                        {Array.from({length: 9}).map((_, i) => <div key={i}>{i + 1}</div>)}
                    </div>
                    <div>
                        <div><span className="text-purple-400">class</span> <span className="text-yellow-200">DavinThomas</span> <span className="text-purple-400">extends</span> <span className="text-yellow-200">Engineer</span> {'{'}</div>
                        <div className="pl-4">
                            <span className="text-purple-400">private</span> <span className="text-red-300">String</span> <span className="text-blue-300">role</span> = <span className="text-green-300">"Software Engineer"</span>;
                        </div>
                        <div className="pl-4">
                            <span className="text-purple-400">private</span> <span className="text-red-300">String[]</span> <span className="text-blue-300">specialties</span> = {'{'}</div>
                        <div className="pl-8">
                            <span className="text-green-300">"High-Performance APIs"</span>,
                        </div>
                        <div className="pl-8">
                            <span className="text-green-300">"Distributed Systems"</span>,
                        </div>
                        <div className="pl-8">
                            <span className="text-green-300">"Cloud Architecture"</span>
                        </div>
                        <div className="pl-4">{'};'}</div>
                        <div className="pl-4 mt-2">
                            <span className="text-purple-400">public</span> <span className="text-red-300">void</span> <span className="text-blue-200">optimizeSystem</span>() {'{'}
                        </div>
                        <div className="pl-8">
                             <span className="text-slate-400">// Scaling throughput by 36x...</span>
                        </div>
                        <div className="pl-4">{'}'}</div>
                        <div>{'}'}</div>
                    </div>
                </div>
                
                {/* Blinking Cursor */}
                <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-primary inline-block ml-1 align-middle"
                />
            </div>
        </div>
    );
};

const StatBadge: React.FC<{ icon: React.ElementType, label: string, value: string, color: string }> = ({ icon: Icon, label, value, color }) => (
    <div className="flex items-center gap-3 bg-surface/50 border border-white/5 px-4 py-2 rounded-lg backdrop-blur-sm">
        <div className={`p-2 rounded-md ${color} bg-opacity-20`}>
            <Icon className={`w-4 h-4 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div>
            <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{label}</div>
            <div className="font-bold text-white">{value}</div>
        </div>
    </div>
);

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary font-mono text-sm tracking-wider">SYSTEM_ONLINE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Davin S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Thomas
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed border-l-2 border-slate-800 pl-6">
              Software Development Engineer at <span className="text-primary">Mercedes-Benz R&D</span>. 
              Specializing in high-performance Java systems, optimizing critical APIs by <strong className="text-white">50x</strong>, 
              and architecting distributed cloud solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 mb-12 text-slate-400">
                <a href="https://linkedin.com/in/davinsthomas/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="https://github.com/Davin07" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" /> GitHub
                </a>
                <a href="mailto:davin.sthomas07@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" /> Email
                </a>
            </div>

            {/* Quick Stats Row */}
            <div className="flex flex-wrap gap-4">
                <StatBadge icon={Zap} label="Optimization" value="50x Speed" color="bg-yellow-500" />
                <StatBadge icon={Server} label="Throughput" value="36x Batch" color="bg-green-500" />
                <StatBadge icon={Activity} label="Logs" value="-89% Noise" color="bg-blue-500" />
            </div>
          </motion.div>

          {/* Right Visual: Code Editor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block perspective-1000"
          >
            <div className="transform transition-transform hover:scale-[1.02] duration-500">
                 <CodeWindow />
            </div>
            
            {/* Floating Elements behind */}
            <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 p-4 bg-surface border border-slate-700 rounded-lg shadow-xl z-0 opacity-80"
            >
                <Cpu className="w-8 h-8 text-secondary" />
            </motion.div>
             <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 p-4 bg-surface border border-slate-700 rounded-lg shadow-xl z-20 opacity-90"
            >
                <Server className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="mt-12 flex flex-col items-center justify-center text-slate-500 gap-2"
        >
            <span className="text-xs font-mono tracking-widest">SCROLL_TO_EXPLORE</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;