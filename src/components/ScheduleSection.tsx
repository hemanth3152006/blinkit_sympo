import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Day 1 — March 15",
    slots: [
      { time: "09:00 AM", title: "Inauguration Ceremony", venue: "Main Auditorium" },
      { time: "10:30 AM", title: "Code Sprint Begins", venue: "CS Lab" },
      { time: "11:00 AM", title: "Paper Presentation", venue: "Seminar Hall A" },
      { time: "02:00 PM", title: "UI/UX Challenge", venue: "Design Studio" },
      { time: "04:00 PM", title: "Tech Talk - AI & Future", venue: "Main Auditorium" },
    ],
  },
  {
    day: "Day 2 — March 16",
    slots: [
      { time: "09:00 AM", title: "Hackathon Kickoff", venue: "Innovation Hub" },
      { time: "10:00 AM", title: "Gaming Arena Opens", venue: "Gaming Zone" },
      { time: "01:00 PM", title: "Hackathon Demos", venue: "Innovation Hub" },
      { time: "03:00 PM", title: "Prize Distribution", venue: "Main Auditorium" },
      { time: "05:00 PM", title: "Valedictory & Closing", venue: "Main Auditorium" },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-accent text-sm tracking-[0.3em] uppercase">
            Plan Your Day
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 gradient-text">
            Schedule
          </h2>
        </motion.div>

        <div className="space-y-12">
          {schedule.map((day, dayIdx) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIdx * 0.2 }}
            >
              <h3 className="text-xl font-display font-bold text-primary mb-6 text-glow-sm">
                {day.day}
              </h3>
              <div className="space-y-3">
                {day.slots.map((slot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-hover rounded-lg p-4 flex items-center gap-4"
                  >
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <Clock className="w-4 h-4 text-primary/70" />
                      <span className="text-sm font-accent font-semibold text-primary">
                        {slot.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="font-body font-medium text-foreground">
                        {slot.title}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-accent hidden sm:block">
                      {slot.venue}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
