import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "This privacy policy applies to the WhatsApp chatbot service ('Furniture Shop Bot') built and operated by Charan, used to answer product, pricing, and stock questions for a furniture shop via WhatsApp.",
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content:
      "When you message the WhatsApp bot, we receive your WhatsApp phone number, display name, and the text of your messages, as provided to us by WhatsApp/Meta's Business API.",
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content:
      "This information is used only to respond to your queries about products, pricing, and availability. It is not used for advertising, not sold, and not shared with third parties.",
  },
  {
    id: "data-storage",
    title: "Data Storage",
    content:
      "Message data and product data are stored securely in a Supabase database, used solely to power the chatbot's responses.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content:
      "We retain conversation data only as long as necessary to operate and improve the chatbot service.",
  },
  {
    id: "contact",
    title: "Contact",
    content:
      "For questions about this policy or to request data deletion, contact: bonamukkalacharan@gmail.com",
  },
  {
    id: "last-updated",
    title: "Last Updated",
    content: "August 2026",
  },
];

const Privacy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="bg-background min-h-screen">
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy Policy — <span className="text-gradient">Furniture Shop Bot</span>
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div ref={ref} className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
