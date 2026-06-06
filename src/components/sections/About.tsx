"use client";

import { motion } from "framer-motion";
import { User, Code2, Rocket, Award } from "lucide-react";

export function About() {
  const stats = [
    { label: "Months Experience", value: "1+", icon: User },
    { label: "Projects Built", value: "10+", icon: Code2 },
    { label: "API Speed Up", value: "35%", icon: Rocket },
    { label: "Awards", value: "2", icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-accent mb-4">
            About Me<span className="text-accent-start">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-start to-accent-end rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo / Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative z-10 rounded-2xl overflow-hidden bg-bg-tertiary border border-border-subtle flex items-center justify-center">
              <img 
                src="/Shahid.png" 
                alt="Sahidhusen Mukdiwala" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-start/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-end/20 rounded-full blur-2xl z-0" />
            <div className="absolute inset-0 border border-border-subtle rounded-2xl translate-x-4 translate-y-4 -z-10" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-text-accent mb-6">
              MERN Stack Specialist based in Gujarat, India
            </h3>
            
            <div className="space-y-4 text-text-secondary text-base leading-relaxed mb-10">
              <p>
                I am a passionate Full Stack Developer currently working at Junkies Coder. 
                With a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js, MySQL), 
                I specialize in building scalable, responsive, and performance-optimized web applications.
              </p>
              <p>
                My approach to development is centered around writing clean, maintainable code and leveraging AI tools to accelerate problem-solving. I recently optimized API response times by 35% in my current role, demonstrating my commitment to technical excellence.
              </p>
              <p>
                Beyond coding, I'm a continuous learner, an SSIP Hackathon Finalist, and a proud recipient of the &quot;Star Employee&quot; award. I thrive in environments that challenge me to grow and deliver impactful software solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 rounded-xl bg-background border border-border-subtle hover:border-accent-start/50 transition-colors flex flex-col items-center text-center group"
                >
                  <stat.icon className="w-6 h-6 text-accent-start mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-heading font-bold text-text-accent mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-text-secondary font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
