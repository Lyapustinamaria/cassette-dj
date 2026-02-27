import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-8">
              About
            </span>

            <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed">
              <p>
                CASSETTE.DJ is the project of Mitya Klochkov — a Berlin-based selector who works exclusively with cassette tape. No laptops on stage. No sync buttons. Every set is recorded and mixed in real time on modified tape decks.
              </p>
              <p>
                The approach is deliberately limited: two decks, a mixer, and a library of over 800 hand-dubbed cassettes spanning deep house, dub, ambient, Afrobeat, and leftfield electronics. The constraints produce something digital sets can't — imperfection, presence, and a sound that belongs to the room.
              </p>
              <p>
                Mitya has played at Ingwer, and a circuit of independent art spaces and clubs across Europe. He also runs a quarterly tape zine documenting analog sound culture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
