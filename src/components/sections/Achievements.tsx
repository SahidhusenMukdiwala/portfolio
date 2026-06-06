"use client";

import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "Star Employee of the Quarter (Q4 2025)",
      organization: "Junkies Coder",
      description: "Recognized for outstanding performance, commitment, and consistent technical excellence. Delivered a 35% improvement in API response times.",
      icon: Star,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "SSIP Hackathon 2022-23 Finalist",
      organization: "State-Level Innovation Competition",
      description: "Competed successfully against 100+ teams, demonstrating technical prowess and problem-solving capabilities by building a comprehensive Employee Management System.",
      icon: Trophy,
      color: "from-accent-start to-accent-end"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-start/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-accent mb-4">
            Key Achievements<span className="text-accent-start">.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Milestones and recognition I've received throughout my journey in software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-2xl bg-background border border-border-subtle relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity`} />
              
              <div className="w-14 h-14 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center mb-6 text-text-accent group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-text-accent mb-2">
                {item.title}
              </h3>
              <div className="text-sm font-medium text-accent-start mb-4">
                {item.organization}
              </div>
              <p className="text-text-secondary text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
