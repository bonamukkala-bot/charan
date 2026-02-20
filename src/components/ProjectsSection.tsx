import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Resume Analyser",
    description: "An AI-powered tool that analyses resumes and provides actionable feedback to improve your profile.",
    github: "https://github.com/bonamukkala-bot/",
  },
  {
    title: "Travel Guide",
    description: "A smart travel guide application that helps users discover destinations and plan trips effortlessly.",
    github: "https://github.com/bonamukkala-bot/",
  },
  {
    title: "Weather App",
    description: "A real-time weather application with beautiful UI showing forecasts and current conditions.",
    github: "https://github.com/bonamukkala-bot/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl border border-border p-6 card-glow flex flex-col"
            >
              <div className="w-full h-40 rounded-lg bg-secondary mb-5 flex items-center justify-center">
                <ExternalLink size={32} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 flex-1">
                {p.description}
              </p>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                <Github size={16} /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
