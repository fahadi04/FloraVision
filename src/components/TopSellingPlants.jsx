import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { topSellingPlants } from "../data/plantsData";

export default function TopSellingPlants() {
    return (
        <section
            className="px-8 py-20 text-white overflow-hidden flex flex-col items-center"
            style={{
                background: "linear-gradient(180deg, #1B2316 0%, #182012 50%, #10170C 100%)",
            }}
        >
            <div className="flex justify-center items-center mb-12">
                <h2 className="relative text-3xl font-bold text-white inline-block text-center">
                    <span className="relative inline-block px-8 py-2">
                        <span
                            className="absolute -left-6 top-0 w-6 h-6 border-l-4 border-t-4 rounded-tl-lg"
                            style={{ borderColor: "#9EB384" }}
                        ></span>
                        Our Top Selling Plants
                        <span
                            className="absolute -right-6 bottom-0 w-6 h-6 border-r-4 border-b-4 rounded-br-lg"
                            style={{ borderColor: "#9EB384" }}
                        ></span>
                    </span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-6">
                {topSellingPlants.map((plant, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -2, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="border rounded-lg flex flex-col items-center text-center shadow-lg shadow-green-900/100 
                                   border border-transparent transition-transform duration-300 "
                        style={{
                            width: "300px",
                            background:
                                "linear-gradient(135deg, #1B2316 0%, #1f2b1a 50%, #21351c 100%)",
                        }}
                    >
                        <img
                            src={plant.img}
                            alt={plant.name}
                            className="w-[350px] h-[350px] rounded-full object-contain drop-shadow-md -mt-20"
                        />

                        <div className="flex flex-col justify-between text-left m-4 gap-4">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">{plant.name}</h3>
                                <p className="text-gray-400 text-sm p-4 text-left">
                                    {plant.desc}
                                </p>
                            </div>

                            <div className="flex flex-row justify-between items-center px-4">
                                <p className="font-semibold text-white">Rs. {plant.price}/-</p>

                                <button
                                    className="px-3 py-2 border border-white rounded-lg 
                                               text-white hover:bg-green-500 hover:text-black 
                                               transition-all duration-300 flex items-center justify-center"
                                >
                                    <ShoppingBag size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
