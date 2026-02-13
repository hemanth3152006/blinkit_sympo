import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const ShopFooter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-foreground text-card py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="font-display font-extrabold text-2xl mb-3"
            >
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">blinklit</span>
            </motion.h3>
            <p className="text-sm text-card/60 font-body">
              Groceries & essentials delivered to your doorstep in 10 minutes.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-card/60 font-body">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FFD700" }}
                  className="transition-colors"
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FFD700" }}
                  className="transition-colors"
                >
                  Careers
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FFD700" }}
                  className="transition-colors"
                >
                  Blog
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-sm mb-3">Help</h4>
            <ul className="space-y-2 text-sm text-card/60 font-body">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FFD700" }}
                  className="transition-colors"
                >
                  FAQs
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FFD700" }}
                  className="transition-colors"
                >
                  Contact Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 5, color: "#FFD700" }}
                  className="transition-colors"
                >
                  Privacy Policy
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Download */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-sm mb-3">Download App</h4>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255,215,0,0.15)" }}
              className="flex items-center gap-3 bg-card/10 rounded-xl p-4 transition-all cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Smartphone className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <p className="text-xs text-card/60">Get the app for</p>
                <p className="font-bold text-sm">faster delivery</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-card/10 pt-6 text-center"
        >
          <p className="text-xs text-card/40 font-body">
            © 2026 Blinklit. All rights reserved. Made for college symposium demo purposes only.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ShopFooter;
