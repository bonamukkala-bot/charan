import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube } from "lucide-react";
import charanImg from "@/assets/charan-profile.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Profile placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={charanImg}
              alt="Charan - AI Developer"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border border-border card-glow"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Who am I?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Hi, I'm Charan, a first-year B.Sc. student at NxtWave Institute. I am a quick learner who is always eager to explore new technologies and develop my skills. Alongside my studies, I am a content creator, sharing valuable insights and knowledge to inspire and educate others.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/trending.tech.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} /> Instagram
              </a>
              <a
                href="https://youtube.com/@charanreddysinsights?si=uiCOSP1GTtWCnFRx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube size={20} /> YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
