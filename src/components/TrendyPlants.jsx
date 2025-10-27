import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import img1 from "../assets/plants/Agave.png.png";
import img2 from "../assets/plants/Plaintain-lillies.png.png";

export default function TrendyPlants() {
    return (
        <section
            className="relative px-10 py-20 bg-[#006400] text-white overflow-hidden
            before:content-[''] before:absolute before:top-0 before:right-0 before:w-32 before:h-32 before:border-t-4 before:border-r-4 before:border-green-400 before:rounded-tr-3xl
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-32 after:h-32 after:border-b-4 after:border-l-4 after:border-green-400 after:rounded-bl-3xl"
        >
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
                Our Trendy Plants
            </h2>

            <motion.div
                className="flex flex-col md:flex-row items-center justify-around bg-[#004d00]/70 rounded-full p-6 mb-8  border border-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={img1}
                    alt="Agave Plant"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl mb-6 md:mb-0"
                />

                <div className="md:w-1/2 text-center md:text-left space-y-3">
                    <h3 className="text-2xl font-semibold text-green-300">
                        Agave Plant
                    </h3>
                    <p className="text-gray-200">
                        The Agave plant is a stunning addition to your workspace or home,
                        symbolizing strength and resilience. Perfect for modern desk
                        decoration with low maintenance.
                    </p>
                    <p className="font-semibold text-white text-lg">₹599</p>
                    <button className="mt-4 flex items-center gap-2 border border-white px-6 py-2 rounded-lg hover:bg-green-500 hover:text-black transition mx-auto md:mx-0">
                        Explore <ShoppingBag size={16} />
                    </button>
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row-reverse items-center justify-around bg-[#004d00]/70 rounded-full p-6 border border-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={img2}
                    alt="Plantain Lilies"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl mb-6 md:mb-0"
                />

                <div className="md:w-1/2 text-center md:text-left space-y-3">
                    <h3 className="text-2xl font-semibold text-green-300">
                        Plantain Lilies
                    </h3>
                    <p className="text-gray-200">
                        Add a touch of nature and serenity to your desk or living space.
                        Plantain lilies bring a fresh, calming aesthetic to your home decor.
                    </p>
                    <p className="font-semibold text-white text-lg">₹399</p>
                    <button className="mt-4 flex items-center gap-2 border border-white px-6 py-2 rounded-lg hover:bg-green-500 hover:text-black transition mx-auto md:mx-0">
                        Explore <ShoppingBag size={16} />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
