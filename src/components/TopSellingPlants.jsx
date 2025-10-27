import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { topSellingPlants } from "../data/plantsData";

export default function TopSellingPlants() {
    return (
        <section className="px-10 py-20 bg-neutral-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-white">
                Our Top Selling Plants
            </h2>
            <div className="grid md:grid-cols-3 gap-14 mb-8">
                {topSellingPlants.map((plant, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#004d00]/70 rounded-md p-2 m-2 border-hidden flex flex-col items-center text-center shadow-lg hover:shadow-green-400/20 transition-transform"
                        whileHover={{ y: -5 }}
                    >
                        <img
                            src={plant.img}
                            alt={plant.name}
                            className="w-32\ h-32 mb-4 object-contain"
                        />
                        <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                        <p className="text-gray-400 mb-3 text-sm">{plant.desc}</p>
                        <p className="font-semibold text-green-400 mb-4">{plant.price}</p>
                        <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:bg-green-500 hover:text-black transition">
                            Buy <ShoppingBag size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>
            <hr className="bg-green-900" />
        </section>
    );
}
