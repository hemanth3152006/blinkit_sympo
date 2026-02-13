import { motion } from "framer-motion";
import heroImg from "@/assets/grocery-hero.png";
import { Zap } from "lucide-react";

const ShopHero = () => {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-1.5 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-4">
            <Zap className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground">10-minute delivery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground leading-tight mb-4">
            Groceries &<br />
            essentials,<br />
            <span className="text-card">delivered fast</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg mb-6 max-w-md">
            Fresh vegetables, fruits, dairy, snacks & more — delivered to your doorstep in minutes.
          </p>
          <button className="bg-card text-foreground font-display font-bold text-sm px-8 py-3.5 rounded-xl hover:shadow-product-hover transition-all duration-300">
            Order Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 max-w-lg"
        >
          <img src={heroImg} alt="Fresh groceries" className="w-full rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default ShopHero;
