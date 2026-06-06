"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "cPanel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cpanel/cpanel-original.svg" },
  { name: "CloudPanel", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='35' r='20' stroke='%230052cc' stroke-width='8' fill='none' /><circle cx='35' cy='65' r='20' stroke='%230052cc' stroke-width='8' fill='none' /><circle cx='65' cy='65' r='20' stroke='%230052cc' stroke-width='8' fill='none' /></svg>" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-accent mb-4">
            Technical Skills<span className="text-accent-start">.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My toolbelt for building modern web applications. I focus on the MERN stack 
            while continuously exploring new technologies to improve performance and user experience.
          </p>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Top Row - Scroll Left */}
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
            {/* Double the array for seamless loop */}
            {[...skills, ...skills].map((skill, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 px-6 py-4 mx-3 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-start/50 transition-colors whitespace-nowrap group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full p-1.5 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <span className="text-lg font-medium text-text-accent group-hover:text-accent-start transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row - Scroll Right */}
          <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...skills].reverse().concat([...skills].reverse()).map((skill, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 px-6 py-4 mx-3 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-start/50 transition-colors whitespace-nowrap group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full p-1.5 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <span className="text-lg font-medium text-text-accent group-hover:text-accent-start transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Inline styles for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 45s linear infinite;
        }
      `}} />
    </section>
  );
}
