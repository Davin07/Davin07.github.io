import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';

const SkillCard: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-[#0d1117]/50 border border-white/5 p-4 rounded-lg flex items-center justify-between group hover:border-primary/30 transition-all duration-300">
        <span className="text-slate-300 group-hover:text-primary transition-colors font-medium">{name}</span>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary group-hover:shadow-[0_0_8px_#38bdf8] transition-all"></div>
    </div>
);

const SkillCategory: React.FC<{ title: string; icon: React.ElementType; skills: string[] }> = ({ title, icon: Icon, skills }) => (
    <div className="mb-12 last:mb-0">
        <div className="flex items-center gap-3 mb-6">
            <Icon className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
                <SkillCard key={skill} name={skill} />
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800/30 rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-slate-400">Tools and technologies in my arsenal.</p>
        </div>

        <div className="space-y-16">
            <SkillCategory 
                title="Languages" 
                icon={Code2}
                skills={['Java', 'SQL (Postgres/MySQL)', 'JavaScript', 'C', 'HTML/CSS']}
            />
            <SkillCategory 
                title="Technologies" 
                icon={Database}
                skills={['Spring Boot', 'REST APIs', 'JPA/Hibernate', 'Microservices', 'Apache Kafka', 'MyBatis', 'Quartz']}
            />
            <SkillCategory 
                title="Developer Tools" 
                icon={Wrench}
                skills={['Git', 'Docker/K8s', 'Maven', 'DataDog', 'OpenSearch', 'JMeter', 'GitHub Copilot', 'IntelliJ', 'VS Code']}
            />
        </div>
      </div>
    </section>
  );
};

export default Skills;