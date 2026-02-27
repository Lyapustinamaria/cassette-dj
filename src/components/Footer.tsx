const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium tracking-tight text-foreground/50">
            CASSETTE<span className="text-primary/50">.</span>DJ
          </span>
          <p className="text-xs text-muted-foreground/50">
            © 2026 CASSETTE.DJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
