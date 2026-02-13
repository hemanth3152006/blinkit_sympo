import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck, Truck } from "lucide-react";

const features = [
  { icon: Zap, title: "10-Min Delivery", desc: "Lightning-fast delivery to your door" },
  { icon: Clock, title: "24/7 Available", desc: "Order anytime, day or night" },
  { icon: ShieldCheck, title: "Best Quality", desc: "Fresh & quality guaranteed products" },
  { icon: Truck, title: "Free Delivery", desc: "No delivery charges on orders above ₹199" },
];

const DeliveryBanner = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-product hover:shadow-product-hover transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                <feat.icon className="w-6 h-6 text-brand-yellow-dark" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm mb-1">{feat.title}</h3>
              <p className="text-xs text-muted-foreground">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
