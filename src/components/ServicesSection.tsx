import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Workflow, Rocket } from "lucide-react";

const services = [
  { icon: Globe, title: "Build Modern Websites", desc: "Responsive, fast, and beautiful websites using latest technologies." },
  { icon: Brain, title: "Build AI Applications", desc: "Intelligent apps powered by LLMs and generative AI models." },
  { icon: Workflow, title: "Build Automation Workflows", desc: "Streamlined business processes with n8n and custom automations." },
  { icon: Rocket, title: "Deploy LLM Applications", desc: "Production-ready deployment of large language model applications." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Can <span className="text-gradient">Do</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card rounded-xl border border-border p-6 text-center card-glow"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
