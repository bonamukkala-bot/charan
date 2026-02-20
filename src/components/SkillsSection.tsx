import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain, Workflow, Bot, Code, Repeat, Database,
  FileCode, Globe, Paintbrush, Layout, Wind, Braces,
} from "lucide-react";

const skills = [
  { name: "Generative AI", icon: Brain },
  { name: "n8n Automations", icon: Workflow },
  { name: "LLM Building", icon: Bot },
  { name: "Python", icon: Code },
  { name: "Python Loops", icon: Repeat },
  { name: "SQL", icon: Database },
  { name: "C++", icon: FileCode },
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Paintbrush },
  { name: "Bootstrap", icon: Layout },
  { name: "Tailwind CSS", icon: Wind },
  { name: "JavaScript", icon: Braces },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative bg-card rounded-xl p-6 text-center border border-border card-glow cursor-default"
              >
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-primary/40" />
                <Icon
                  size={32}
                  className="mx-auto mb-3 text-primary group-hover:text-accent transition-colors duration-300"
                />
                <span className="text-sm font-semibold text-foreground">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
