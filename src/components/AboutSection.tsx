import { motion } from "framer-motion";
import { Users, Trophy, Star, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Participants" },
  { icon: Trophy, value: "₹50K", label: "Prize Pool" },
  { icon: Star, value: "15+", label: "Events" },
  { icon: Zap, value: "2", label: "Action-packed Days" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-accent text-sm tracking-[0.3em] uppercase">
              About The Fest
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-6 gradient-text">
              Why Blinklit?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Blinklit is the flagship technical symposium that brings together the brightest 
              minds from colleges across the nation. It's not just an event — it's a movement 
              to inspire, innovate, and ignite passion for technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From intense coding battles to creative design challenges, from thought-provoking 
              paper presentations to adrenaline-fueled gaming tournaments — Blinklit has 
              something for every tech enthusiast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-hover rounded-xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground text-glow-sm">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-accent tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
