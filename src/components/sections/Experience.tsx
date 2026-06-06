"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Junkies Coder",
      location: "Himatnagar, Gujarat",
      period: "September 2024 — Present",
      achievements: [
        "Built modern, responsive web applications using the MERN Stack, implementing UI/UX best practices across web and mobile platforms.",
        "Designed and developed RESTful APIs with Node.js and Express.js, ensuring secure JWT-based authentication.",
        "Optimized database queries and API endpoints, achieving a 35% reduction in average API response time.",
        "Implemented comprehensive unit and integration testing strategies, maintaining 80%+ test coverage.",
        "Awarded Star Employee of the Quarter (Q4 2025) for outstanding performance and technical excellence."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-bg-secondary relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-accent mb-4">
            Experience<span className="text-accent-start">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-start to-accent-end rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border-subtle" />
          
          {/* Animated Line overlay */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-8 top-0 w-px bg-gradient-to-b from-accent-start to-accent-end z-0" 
          />

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-24 pb-16 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-[28px] top-1.5 w-2 h-2 rounded-full bg-accent-start shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10" />
              
              {/* Icon */}
              <div className="hidden md:flex absolute left-4 top-0 w-8 h-8 rounded-full bg-bg-tertiary border border-border-subtle items-center justify-center z-10 text-accent-start">
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="bg-background rounded-2xl border border-border-subtle p-6 md:p-8 hover:border-accent-start/30 transition-colors relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-start/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-text-accent">{exp.role}</h3>
                    <div className="text-accent-start font-medium">{exp.company} <span className="text-text-secondary font-normal ml-2">{exp.location}</span></div>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-bg-tertiary rounded-full text-xs font-medium text-text-secondary border border-border-subtle inline-block self-start md:self-center">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3 relative z-10">
                  {exp.achievements.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-text-secondary text-sm md:text-base flex items-start gap-3">
                      <span className="text-accent-start mt-1.5 text-[10px]">▶</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
