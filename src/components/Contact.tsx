import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

const Contact = () => {
  // Formspree endpoint (free tier is enough for a portfolio site)
  const formEndpoint = "https://formspree.io/f/mwvnrgrp";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Simple anti-spam honeypot
  const honeypotName = useMemo(() => "company", []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // If bot filled honeypot, silently "succeed"
    if (String(data.get(honeypotName) ?? "").trim().length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Formspree error");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-8">
              Contact
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              Book a Set
            </h2>

            {/* Layout: stacked on mobile, side-by-side on desktop */}
            <div className="grid gap-10 md:grid-cols-2 md:gap-14">
              {/* Left: quick contact */}
              <div className="space-y-7">
                <p className="text-foreground/70 leading-relaxed">
                  Prefer email or Instagram? Use the links below — or send a quick booking request via the form.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:mityaklochkov@gmail.com"
                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span>mityaklochkov@gmail.com</span>
                  </a>

                  <a
                    href="https://instagram.com/mityaklochkov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span>@mityaklochkov</span>
                  </a>

                  <div className="flex items-center gap-4 text-foreground/80">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Berlin, Germany</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:mityaklochkov@gmail.com?subject=Booking%20Inquiry"
                    className="inline-flex items-center justify-center text-sm px-6 py-3 border border-border/60 text-foreground/90 rounded-sm hover:border-primary/60 hover:text-foreground transition-colors font-medium tracking-wide"
                  >
                    Or write an email
                  </a>
                </div>
              </div>

              {/* Right: Formspree booking form */}
              <div className="bg-card/40 border border-border/50 rounded-lg p-6 md:p-7 backdrop-blur">
                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name={honeypotName}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono tracking-widest uppercase text-muted-foreground"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md bg-background/40 border border-border/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/70"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono tracking-widest uppercase text-muted-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-md bg-background/40 border border-border/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/70"
                        placeholder="you@domain.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="date"
                        className="text-xs font-mono tracking-widest uppercase text-muted-foreground"
                      >
                        Date
                      </label>
                      <input
                        id="date"
                        type="text"
                        name="date"
                        className="w-full rounded-md bg-background/40 border border-border/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/70"
                        placeholder="e.g. 12 Apr 2026"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="location"
                        className="text-xs font-mono tracking-widest uppercase text-muted-foreground"
                      >
                        Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        name="location"
                        className="w-full rounded-md bg-background/40 border border-border/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/70"
                        placeholder="City / venue"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono tracking-widest uppercase text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-md bg-background/40 border border-border/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/70 resize-none"
                      placeholder="Tell me about the event (format, duration, vibe, timing, etc.)"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full text-sm px-8 py-3.5 bg-primary text-primary-foreground rounded-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 font-medium tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send Booking Request"}
                  </button>

                  {status === "success" && (
                    <p className="text-sm text-foreground/80">
                      Thanks! Your request was sent. I’ll get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or email me.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;