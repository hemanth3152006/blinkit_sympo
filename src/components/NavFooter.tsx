import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg text-primary text-glow-sm tracking-wider">
          BLINKLIT
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Events", "Schedule", "About", "Register"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-accent font-semibold tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#register"
          className="md:hidden px-4 py-2 text-xs font-display font-bold tracking-wider uppercase bg-primary text-primary-foreground rounded-lg"
        >
          Register
        </a>
      </div>
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-primary text-glow-sm tracking-wider mb-1">
              BLINKLIT
            </h3>
            <p className="text-sm text-muted-foreground">
              National Level Technical Symposium 2026
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@blinklit.com"
              className="w-10 h-10 rounded-lg glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919999999999"
              className="w-10 h-10 rounded-lg glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Blinklit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
