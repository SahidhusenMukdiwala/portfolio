"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/icons";

const projects = [
  {
    title: "Hospital Management System",
    description: "A full-stack MERN web application for online patient-doctor connectivity and end-to-end healthcare management. Features secure RBAC using JWT and an appointment scheduling module with real-time updates.",
    image: "/api/placeholder/600/400", // Will use placeholder, user can replace
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/SahidhusenMukdiwala",
    live: "#"
  },
  {
    title: "Employee Management System",
    description: "SSIP Hackathon 2022-23 Finalist project. Comprehensive employee management solution featuring an onboarding module with automated workflows, biometric attendance tracking, and performance analytics dashboards.",
    image: "/api/placeholder/600/400",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "Biometrics"],
    github: "https://github.com/SahidhusenMukdiwala",
    live: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-accent mb-4">
            Featured Projects<span className="text-accent-start">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-start to-accent-end rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-2xl bg-bg-secondary border border-border-subtle overflow-hidden flex flex-col h-full"
            >
              {/* Image Container with hover zoom */}
              <div className="relative aspect-video overflow-hidden bg-bg-tertiary">
                <div className="absolute inset-0 bg-accent-start/10 flex items-center justify-center">
                   <span className="text-text-secondary text-sm">Project Screenshot Placeholder</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-80" />
                
                {/* Links overlay on hover */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.live} className="p-3 bg-text-accent text-background rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-3 bg-bg-tertiary text-text-accent rounded-full hover:scale-110 transition-transform border border-border-subtle">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-text-accent mb-3 group-hover:text-accent-start transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-text-secondary bg-bg-tertiary border border-border-subtle rounded-full">
                      {tag}
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
}
