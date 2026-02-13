import { motion } from "framer-motion";
import { Code, Cpu, Gamepad2, Mic, Lightbulb, Palette } from "lucide-react";

const events = [
  {
    icon: Code,
    title: "Code Sprint",
    description: "Competitive programming challenge. Solve, optimize, and conquer.",
    tag: "Technical",
  },
  {
    icon: Cpu,
    title: "Hackathon",
    description: "48-hour innovation marathon. Build something extraordinary.",
    tag: "Technical",
  },
  {
    icon: Lightbulb,
    title: "Paper Presentation",
    description: "Present your research to industry experts and peers.",
    tag: "Academic",
  },
  {
    icon: Gamepad2,
    title: "Gaming Arena",
    description: "Esports showdown across multiple popular titles.",
    tag: "Non-Technical",
  },
  {
    icon: Mic,
    title: "Tech Talk",
    description: "Lightning talks on cutting-edge technology trends.",
    tag: "Workshop",
  },
  {
    icon: Palette,
    title: "UI/UX Challenge",
    description: "Design intuitive interfaces under time pressure.",
    tag: "Design",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-accent text-sm tracking-[0.3em] uppercase">
            What Awaits You
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 gradient-text">
            Events
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {events.map((event) => (
            <motion.div
              key={event.title}
              variants={item}
              className="group glass-hover rounded-xl p-6 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-accent font-semibold tracking-wider uppercase text-muted-foreground border border-border rounded-full px-3 py-1">
                  {event.tag}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
