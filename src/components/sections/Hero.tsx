"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, ChevronRight } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";
import { ParticleField } from "@/components/ui/particle-field";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleField />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-glow rounded-full blur-[120px] pointer-events-none z-0" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-glass backdrop-blur-md text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-4 text-text-accent"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">
            Sahidhusen
          </span>
          <span className="inline-block animate-wave origin-bottom-right ml-2">👋</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium text-text-secondary mb-8 h-12"
        >
          <Typewriter 
            words={["Full Stack Developer", "MERN Stack Specialist", "Performance Optimizer", "UI/UX Enthusiast"]} 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-base md:text-lg text-text-secondary mb-10"
        >
          Experienced in building modern, responsive applications. I design RESTful APIs, 
          optimize backend performance, and deliver clean, high-quality code that creates 
          seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-text-accent text-background font-medium flex items-center gap-2 hover:scale-105 transition-transform"
          >
            View My Work
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Sahidhusen_Mukdiwala_Resume.pdf"
            target="_blank"
            download
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full border border-border-subtle bg-glass backdrop-blur-md font-medium text-text-accent flex items-center gap-2 hover:bg-bg-tertiary transition-colors"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-accent-start" />
        </motion.div>
      </motion.div>
    </section>
  );
}
