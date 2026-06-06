import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
        All copy rights reserved  © {new Date().getFullYear()} Sahidhusen Mukdiwala.
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SahidhusenMukdiwala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary hover:text-text-accent hover:bg-glass rounded-full transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sahidhusen-mukdiwala-6793a1262/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary hover:text-text-accent hover:bg-glass rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:shahidhusenmukdiwala@gmail.com"
            className="p-2 text-text-secondary hover:text-text-accent hover:bg-glass rounded-full transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
