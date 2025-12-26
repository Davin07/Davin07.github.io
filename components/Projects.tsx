import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Zap, FileText, Cpu, Network } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  architecture: {
    from: React.ElementType;
    mid: React.ElementType;
    to: React.ElementType;
  }
}

const projects: Project[] = [
  {
    title: "Legacy API Overhaul",
    description: "Re-engineered a bottlenecked API handling 15k items. Replaced inefficient loops with optimized SQL, cutting runtime from 15m to 18s.",
    tech: ["Spring Boot", "PostgreSQL", "Query Tuning"],
    impact: "50x Faster",
    architecture: { from: Server, mid: Zap, to: Database }
  },
  {
    title: "Parallel Batch Engine",
    description: "Designed a multi-threaded batch processor using OS threads to saturate CPU cores, handling massive data ingestion loads.",
    tech: ["Java Concurrency", "Batch Processing", "OS Threads"],
    impact: "36x Throughput",
    architecture: { from: FileText, mid: Cpu, to: Cloud }
  },
  {
    title: "Observability Pipeline",
    description: "Structured logging architecture implementation. Migrated raw text logs to MDC-enriched JSON, reducing noise and index costs.",
    tech: ["OpenSearch", "MDC", "Kibana"],
    impact: "90% Less Noise",
    architecture: { from: Server, mid: Network, to: FileText }
  }
];

const ArchitectureSchematic: React.FC<{ arch: Project['architecture'] }> = ({ arch }) => {
    const { from: From, mid: Mid, to: To } = arch;
    
    return (
        <div className="h-32 w-full bg-[#020617]/50 rounded-lg border border-primary/20 flex items-center justify-between px-8 relative overflow-hidden group-hover:border-primary/50 transition-colors">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            {/* Animated Data Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2 z-0 mx-8">
                 <motion.div 
                    animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
                 />
            </div>

            {/* Nodes */}
            <div className="relative z-10 bg-surface p-3 rounded-lg border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-shadow">
                <From className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </div>
            
            <div className="relative z-10 bg-surface p-4 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(56,189,248,0.1)] group-hover:scale-110 transition-transform duration-300">
                <Mid className="w-6 h-6 text-primary animate-pulse-fast" />
            </div>

            <div className="relative z-10 bg-surface p-3 rounded-lg border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-shadow">
                <To className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-primary">Projects</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm tracking-widest">Architecting scalable solutions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-[#0f172a] border border-slate-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

              <ArchitectureSchematic arch={project.architecture} />

              <div className="mt-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-xs font-bold text-background bg-primary px-2 py-1 rounded shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                        {project.impact}
                    </span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                    {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-400 border border-slate-700 px-2 py-1 rounded bg-slate-900/50">
                        {t}
                    </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;