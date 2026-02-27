import { motion } from "framer-motion";

const formats = [
  {
    label: "Cassette-Only Set",
    detail: "Two modified tape decks, analog mixer. Pure tape sound.",
  },
  {
    label: "Hybrid Analog/Digital",
    detail: "Cassette decks paired with a digital source for extended range.",
  },
  {
    label: "Set Duration",
    detail: "90 minutes to 4 hours. Longer residencies on request.",
  },
  {
    label: "Suitable Venues",
    detail: "Clubs, bars, galleries, listening rooms, private events, outdoor stages.",
  },
  {
    label: "Technical Requirements",
    detail: "Standard DJ booth power. PA with sub. Minimal setup — arrives self-contained.",
  },
];

const Formats = () => {
  return (
    <section id="formats" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-8">
              Formats
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
              What I Bring
            </h2>

            <div className="space-y-0">
              {formats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group py-5 border-b border-border last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-neon-cyan/60 mt-1 shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground line-grow inline-block mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Formats;
