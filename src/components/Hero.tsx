import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grain-overlay">
      {/* Ambient warm light */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] xl:text-[104px] font-black tracking-[0.02em] md:tracking-[0.03em] leading-[0.9] mb-6">
              <span className="text-gradient -translate-x-[0.02em]">CASSETTE</span>
              <span className="text-foreground">.DJ</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mb-6"
          >
            Tape DJ / Analog Sets / Berlin
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground/80 max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Sound shaped by tape. Every set is a one-take analog journey — no loops, no undo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="text-sm px-8 py-3.5 bg-primary text-primary-foreground rounded-sm hover:shadow-[0_0_30px_hsl(330_100%_65%/0.2),0_0_30px_hsl(30_100%_62%/0.3)] transition-all duration-300 font-medium tracking-wide"
            >
              Book a Set
            </a>
            <a
              href="#listen"
              className="text-sm px-8 py-3.5 border border-border text-foreground rounded-sm hover:border-muted-foreground transition-colors duration-300 tracking-wide"
            >
              Listen
            </a>
          </motion.div>

          {/* Discreet VU-inspired line (no layout shift) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex justify-center gap-1 h-[22px] items-end overflow-hidden"
          >
            {[...Array(24)].map((_, i) => {
              const peak = 0.3 + (i % 7) * 0.08; // стабильные "пики", без Math.random()
              const duration = 0.7 + (i % 5) * 0.12;

              return (
                <motion.div
                  key={i}
                  className="w-[2px] h-full bg-primary/30 rounded-full origin-bottom"
                  animate={{ scaleY: [0.15, 0.6 + peak, 0.15] }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.04,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
