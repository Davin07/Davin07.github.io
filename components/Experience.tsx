import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: '1',
    role: 'Software Development Engineer',
    company: 'Mercedes-Benz Research and Development India (MBRDI)',
    period: 'Aug 2022 - Present',
    description: [
      'Optimized the performance of a business-critical API by 50x, reducing processing time from 15 minutes to 18 seconds for 15K items.',
      'Reduced daily log volumes from 1.35M to 150K (89% reduction) by optimizing logging infrastructure and patterns.',
      'Implemented OS thread-based parallel processing for batch operations, resulting in 97% faster execution times and 36x throughput improvement.',
      'Led end-to-end migration of 4,000+ lines of database access code from MyBatis to JPA, improving maintainability.',
      'Migrated hard-coded secrets to K8s volume mounted secrets, enhancing security posture.',
      'Owned complete development life-cycle for several new application flows, achieving 100% on-time delivery with zero critical production issues.',
      'Led technical design and end-to-end development of complex features, producing detailed documentation.',
      'Actively contributed to multiple microservices through feature development, bug fixes, code reviews, and technical integration guidance.'
    ]
  },
  {
    id: '2',
    role: 'B.Tech in Computer Science',
    company: 'Dayananda Sagar University',
    period: 'Aug 2018 - Jun 2022',
    description: [
      'Graduated with 8.98 CGPA.',
      'Core focus on Data Structures, Algorithms, and Distributed System Design.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm tracking-widest">Building systems that scale.</p>
        </div>

        <div className="relative space-y-12">
          {/* Central Line (for desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal group ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot on line */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-slate-800 group-hover:border-primary flex items-center justify-center -translate-x-1/2 transition-colors duration-500 z-20">
                  <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-primary group-hover:shadow-[0_0_8px_#38bdf8] transition-all"></div>
              </div>

              {/* Card Container */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-surface/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all duration-500 relative group">
                    {/* Glowing Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
                    
                    <div className="flex flex-col mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                            <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-md tracking-wider">
                                {exp.period}
                            </span>
                        </div>
                        <div className="text-slate-400 font-medium text-sm">{exp.company}</div>
                    </div>

                    <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-slate-400 leading-relaxed flex gap-3">
                            <span className="text-primary font-bold mt-0.5">›</span>
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;