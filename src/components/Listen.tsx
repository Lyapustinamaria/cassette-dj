import { motion } from "framer-motion";

const Listen = () => {
  return (
    <section id="listen" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-8">
              Listen
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              Selected Mixes
            </h2>

            <div className="space-y-6">
              {/* SoundCloud Embeds — replace src with real URLs */}
              <div className="rounded-sm overflow-hidden border border-border bg-card">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567890&color=%23ff9e3d&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                  title="Mix 1"
                  className="w-full"
                />
              </div>

              <div className="rounded-sm overflow-hidden border border-border bg-card">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/0987654321&color=%23ff9e3d&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                  title="Mix 2"
                  className="w-full"
                />
              </div>

              <p className="text-sm text-muted-foreground pt-4">
                More sets on{" "}
                <a href="#" className="text-primary hover:underline">SoundCloud</a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">Mixcloud</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Listen;
