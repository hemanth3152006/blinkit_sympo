import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const ShopFooter = () => {
  return (
    <footer className="bg-foreground text-card py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-extrabold text-2xl mb-3">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">blinklit</span>
            </h3>
            <p className="text-sm text-card/60 font-body">
              Groceries & essentials delivered to your doorstep in 10 minutes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-card/60 font-body">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-3">Help</h4>
            <ul className="space-y-2 text-sm text-card/60 font-body">
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-display font-bold text-sm mb-3">Download App</h4>
            <div className="flex items-center gap-3 bg-card/10 rounded-xl p-4">
              <Smartphone className="w-8 h-8 text-primary" />
              <div>
                <p className="text-xs text-card/60">Get the app for</p>
                <p className="font-bold text-sm">faster delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-card/10 pt-6 text-center">
          <p className="text-xs text-card/40 font-body">
            © 2026 Blinklit. All rights reserved. Made for college symposium demo purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ShopFooter;
