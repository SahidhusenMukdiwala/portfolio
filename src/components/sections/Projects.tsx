"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Server } from "lucide-react";
import { Github } from "@/components/ui/icons";

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "QuickCash Ledger - Cash Flow Management",
    description: "A full-stack financial transaction and cash flow ledger application. Features dynamic sales voucher tracking, payment mode analytics, multi-tab transaction filtering, custom keyboard navigation shortcuts, and secure JWT authentication.",
    image: "/projects/quickcash.png",
    tags: ["Next.js", "React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Vercel"],
    githubFrontend: "https://github.com/SahidhusenMukdiwala/Quick-cash-frontend",
    githubBackend: "https://github.com/SahidhusenMukdiwala/Quick-Cash-Backend",
    live: "https://quick-cash-frontend.vercel.app/",
    featured: true,
  },
  {
    title: "Hospital Management System",
    description: "A full-stack MERN web application for online patient-doctor connectivity and end-to-end healthcare management. Features secure RBAC using JWT and an appointment scheduling module with real-time updates.",
    image: "/api/placeholder/600/400",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-2xl bg-bg-secondary border border-border-subtle overflow-hidden flex flex-col h-full hover:border-accent-start/40 transition-colors duration-300"
            >
              {/* Image Container with hover zoom */}
              <div className="relative aspect-video overflow-hidden bg-bg-tertiary">
                {project.image && !project.image.includes("placeholder") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-accent-start/10 flex items-center justify-center">
                    <span className="text-text-secondary text-sm font-medium">Project Screenshot Placeholder</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-80" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-accent-start/90 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-md">
                    Featured Project
                  </div>
                )}

                {/* Links overlay on hover */}
                <div className="absolute inset-0 bg-background/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 flex-wrap">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-text-accent text-background font-medium text-xs rounded-full hover:scale-105 transition-transform flex items-center gap-1.5 shadow-md"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-bg-tertiary text-text-accent font-medium text-xs rounded-full hover:scale-105 transition-transform border border-border-subtle flex items-center gap-1.5 shadow-md"
                      title="Frontend Repository"
                    >
                      <Code2 className="w-3.5 h-3.5 text-accent-start" />
                      <span>Frontend</span>
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-bg-tertiary text-text-accent font-medium text-xs rounded-full hover:scale-105 transition-transform border border-border-subtle flex items-center gap-1.5 shadow-md"
                      title="Backend Repository"
                    >
                      <Server className="w-3.5 h-3.5 text-accent-end" />
                      <span>Backend</span>
                    </a>
                  )}
                  {project.github && !project.githubFrontend && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-bg-tertiary text-text-accent font-medium text-xs rounded-full hover:scale-105 transition-transform border border-border-subtle flex items-center gap-1.5 shadow-md"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-accent mb-3 group-hover:text-accent-start transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium text-text-secondary bg-bg-tertiary border border-border-subtle rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Card Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border-subtle text-xs font-medium text-text-secondary flex-wrap mt-auto">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-start transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-start transition-colors flex items-center gap-1.5"
                    >
                      <Code2 className="w-3.5 h-3.5 text-accent-start" />
                      Frontend Repo
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-start transition-colors flex items-center gap-1.5"
                    >
                      <Server className="w-3.5 h-3.5 text-accent-end" />
                      Backend Repo
                    </a>
                  )}
                  {project.github && !project.githubFrontend && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-start transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

