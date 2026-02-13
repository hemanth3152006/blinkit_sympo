import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import catVegetables from "@/assets/cat-vegetables.png";
import catFruits from "@/assets/cat-fruits.png";
import catDairy from "@/assets/cat-dairy.png";
import catSnacks from "@/assets/cat-snacks.png";
import catBeverages from "@/assets/cat-beverages.png";
import catBakery from "@/assets/cat-bakery.png";

const products = [
  { id: 1, name: "Fresh Spinach", weight: "250g", price: 25, mrp: 35, image: catVegetables, tag: "Bestseller" },
  { id: 2, name: "Orange Pack", weight: "1 kg", price: 80, mrp: 110, image: catFruits, tag: "Fresh" },
  { id: 3, name: "Full Cream Milk", weight: "500ml", price: 30, mrp: 32, image: catDairy, tag: null },
  { id: 4, name: "Cream Crackers", weight: "200g", price: 45, mrp: 60, image: catSnacks, tag: "Offer" },
  { id: 5, name: "Mixed Fruit Juice", weight: "1L", price: 99, mrp: 130, image: catBeverages, tag: "Popular" },
  { id: 6, name: "Butter Croissant", weight: "2 pcs", price: 60, mrp: 80, image: catBakery, tag: "Fresh" },
  { id: 7, name: "Paneer Cubes", weight: "200g", price: 70, mrp: 85, image: catDairy, tag: null },
  { id: 8, name: "Banana", weight: "6 pcs", price: 40, mrp: 50, image: catFruits, tag: "Bestseller" },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [qty, setQty] = useState(0);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-card rounded-2xl border border-border p-3 shadow-product hover:shadow-product-hover transition-all duration-300 flex flex-col"
    >
      {/* Tag */}
      <div className="relative mb-2">
        {product.tag && (
          <span className="absolute top-1 left-1 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-md z-10">
            {product.tag}
          </span>
        )}
        <div className="bg-surface-warm rounded-xl p-3 flex items-center justify-center aspect-square">
          <img src={product.image} alt={product.name} className="w-24 h-24 object-contain" />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-body font-bold text-sm text-foreground leading-snug">{product.name}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{product.weight}</p>

        <div className="mt-auto pt-3 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-foreground">₹{product.price}</span>
              <span className="text-xs text-muted-foreground line-through">₹{product.mrp}</span>
            </div>
            {discount > 0 && (
              <span className="text-xs font-bold text-brand-green">{discount}% OFF</span>
            )}
          </div>

          {qty === 0 ? (
            <motion.button
              onClick={() => setQty(1)}
              className="bg-card border-2 border-brand-green text-brand-green font-bold text-sm px-4 py-1.5 rounded-lg hover:bg-brand-green hover:text-accent-foreground transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ADD
            </motion.button>
          ) : (
            <div className="flex items-center gap-1 bg-brand-green rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(q => Math.max(0, q - 1))}
                className="p-1.5 text-accent-foreground hover:bg-brand-green/80"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold text-accent-foreground w-6 text-center">{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="p-1.5 text-accent-foreground hover:bg-brand-green/80"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-10 px-4 bg-surface-warm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-2xl font-display font-bold text-foreground">
            Bestsellers
          </h2>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-sm font-bold text-brand-green hover:underline transition-all"
          >
            See all →
          </motion.button>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
