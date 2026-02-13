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
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`${cat.color} rounded-2xl p-4 flex flex-col items-center gap-3 hover:shadow-product-hover transition-all duration-300 cursor-pointer group`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm font-bold font-body text-foreground">{cat.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
