import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Listen", id: "listen" },
    { label: "Formats", id: "formats" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a onClick={() => scrollToId("home")} className="text-lg font-bold tracking-tight text-foreground">
            CASSETTE<span className="text-primary">.</span>
            <span className="text-secondary">DJ</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                onClick={() => scrollToId(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              onClick={() => scrollToId("contact")}
              className="text-sm px-5 py-2 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity font-medium"
            >
              Book a Set
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className="text-foreground hover:text-primary transition-colors py-2 text-sm"
                  onClick={() => scrollToId(item.id)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="text-sm px-5 py-2.5 bg-primary text-primary-foreground rounded-sm text-center font-medium"
                onClick={() => scrollToId("contact")}
              >
                Book a Set
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
