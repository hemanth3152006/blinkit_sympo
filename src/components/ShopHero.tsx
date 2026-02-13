import { motion } from "framer-motion";
import heroImg from "@/assets/grocery-hero.png";
import { Zap } from "lucide-react";

const ShopHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-4">
            <Zap className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-bold text-primary-foreground">10-minute delivery</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground leading-tight mb-4">
            Groceries &<br />
            essentials,<br />
            <span className="text-card">delivered fast</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-primary-foreground/80 font-body text-lg mb-6 max-w-md">
            Fresh vegetables, fruits, dairy, snacks & more — delivered to your doorstep in minutes.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-card text-foreground font-display font-bold text-sm px-8 py-3.5 rounded-xl hover:shadow-product-hover transition-all duration-300"
          >
            Order Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          className="flex-1 max-w-lg"
        >
          <img src={heroImg} alt="Fresh groceries" className="w-full rounded-2xl shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default ShopHero;
