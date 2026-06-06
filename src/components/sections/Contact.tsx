"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-accent mb-4">
            Get In Touch<span className="text-accent-start">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-start to-accent-end rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-accent mb-6">
              Let's talk about your next project
            </h3>
            <p className="text-text-secondary mb-10 text-lg">
              I'm currently available for full-time roles and freelance opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-tertiary flex items-center justify-center text-accent-start shrink-0 border border-border-subtle">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-secondary mb-1">Email</h4>
                  <a href="mailto:shahidhusenmukdiwala1@gmail.com" className="text-lg font-medium text-text-accent hover:text-accent-start transition-colors">
                    shahidhusenmukdiwala1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-tertiary flex items-center justify-center text-accent-start shrink-0 border border-border-subtle">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-secondary mb-1">Location</h4>
                  <p className="text-lg font-medium text-text-accent">
                    Himatnagar, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-secondary p-8 rounded-3xl border border-border-subtle relative"
          >
            {formStatus === "success" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-bg-secondary rounded-3xl z-10">
                <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-text-accent mb-2">Message Sent!</h3>
                <p className="text-text-secondary">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 px-6 py-2 rounded-full bg-bg-tertiary text-text-accent hover:bg-border-subtle transition-colors border border-border-subtle"
                >
                  Send Another
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-text-accent focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-text-accent focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-text-secondary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-text-accent focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start transition-all"
                  placeholder="Hello!"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-text-accent focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start transition-all resize-none"
                  placeholder="I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-start to-accent-end text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-start/20 transition-all disabled:opacity-70"
              >
                {formStatus === "submitting" ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {formStatus === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
