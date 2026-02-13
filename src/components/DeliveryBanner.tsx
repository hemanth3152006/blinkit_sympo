import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck, Truck } from "lucide-react";

const features = [
  { icon: Zap, title: "10-Min Delivery", desc: "Lightning-fast delivery to your door" },
  { icon: Clock, title: "24/7 Available", desc: "Order anytime, day or night" },
  { icon: ShieldCheck, title: "Best Quality", desc: "Fresh & quality guaranteed products" },
  { icon: Truck, title: "Free Delivery", desc: "No delivery charges on orders above ₹199" },
];

const DeliveryBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-product hover:shadow-product-hover transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3"
              >
                <feat.icon className="w-6 h-6 text-brand-yellow-dark" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="font-display font-bold text-foreground text-sm mb-1"
              >
                {feat.title}
              </motion.h3>
              <p className="text-xs text-muted-foreground">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
