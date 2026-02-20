import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-hero-dark py-10 px-4">
    <div className="container mx-auto flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        <a href="https://github.com/bonamukkala-bot/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com/in/bonamukkala-charan-19711636a" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="https://www.instagram.com/trending.tech.ai/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="https://youtube.com/@charanreddysinsights?si=uiCOSP1GTtWCnFRx" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary transition-colors" aria-label="YouTube">
          <Youtube size={22} />
        </a>
      </div>
      <p className="text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} Charan. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
