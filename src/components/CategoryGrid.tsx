import { motion } from "framer-motion";
import catVegetables from "@/assets/cat-vegetables.png";
import catFruits from "@/assets/cat-fruits.png";
import catDairy from "@/assets/cat-dairy.png";
import catSnacks from "@/assets/cat-snacks.png";
import catBeverages from "@/assets/cat-beverages.png";
import catBakery from "@/assets/cat-bakery.png";

const categories = [
  { name: "Vegetables", image: catVegetables, color: "bg-green-50" },
  { name: "Fruits", image: catFruits, color: "bg-orange-50" },
  { name: "Dairy", image: catDairy, color: "bg-blue-50" },
  { name: "Snacks", image: catSnacks, color: "bg-amber-50" },
  { name: "Beverages", image: catBeverages, color: "bg-red-50" },
  { name: "Bakery", image: catBakery, color: "bg-yellow-50" },
];

const CategoryGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-display font-bold text-foreground mb-6"
        >
          Shop by Category
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.name}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className={`${cat.color} rounded-2xl p-4 flex flex-col items-center gap-3 hover:shadow-product-hover transition-all duration-300 cursor-pointer group`}
            >
              <motion.img
                src={cat.image}
                alt={cat.name}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-20 h-20 object-contain"
              />
              <motion.span
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="text-sm font-bold font-body text-foreground"
              >
                {cat.name}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
