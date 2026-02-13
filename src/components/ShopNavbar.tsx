import { Search, ShoppingCart, MapPin, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ShopNavbar = () => {
  const [cartCount] = useState(3);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top yellow bar */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-primary py-1.5 text-center">
        <p className="text-xs font-bold font-body text-primary-foreground tracking-wide">
          ⚡ Groceries delivered in 10 minutes — Order now!
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          href="#"
          className="font-display font-extrabold text-2xl text-primary-foreground shrink-0">
          <span className="bg-primary px-3 py-1 rounded-lg">blinklit</span>
        </motion.a>

        {/* Location */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-1.5 text-sm shrink-0 group">
          <MapPin className="w-4 h-4 text-foreground" />
          <div className="text-left">
            <p className="font-bold text-foreground text-xs leading-tight">Delivery in 10 mins</p>
            <p className="text-muted-foreground text-xs group-hover:text-foreground transition-colors">Select your location</p>
          </div>
        </motion.button>

        {/* Search */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder='Search "milk, bread, eggs..."'
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-muted border-none text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* Actions */}
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand-yellow-dark transition-colors">
          <User className="w-5 h-5" />
          Login
        </motion.button>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2 bg-brand-green text-accent-foreground px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-orange text-accent-foreground text-xs font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </motion.button>
      </div>
    </nav>
  );
};

export default ShopNavbar;
