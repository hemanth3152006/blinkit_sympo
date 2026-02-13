import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-24 px-4 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 text-center neon-border"
        >
          <span className="text-primary font-accent text-sm tracking-[0.3em] uppercase">
            Don't Miss Out
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4 gradient-text">
            Register Now
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Secure your spot at the most anticipated tech symposium of the year. 
            Limited seats available — register today!
          </p>

          <motion.a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl font-display text-sm font-bold tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(175_100%_50%/0.4)] transition-all duration-300 animate-pulse-glow"
          >
            Register Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="text-xs text-muted-foreground mt-6">
            Registration fee: ₹200 per head • Team events: ₹500 per team
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
