import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "AI Developer",
  "GenAI Engineer",
  "Automation Builder",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-dark/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <Sparkles size={14} className="text-accent" />
            <span className="text-sm text-primary-foreground/80">Welcome to my portfolio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Charan</span>
          </h1>

          <div className="h-10 md:h-12 flex items-center justify-center mb-8">
            <span className="font-display text-xl md:text-2xl text-primary-foreground/70">
              {text}
            </span>
            <span className="ml-0.5 border-r-2 border-primary h-6 md:h-8 animate-typing-cursor" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary/40 text-primary-foreground font-semibold text-sm hover:bg-primary/10 transition-all"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
