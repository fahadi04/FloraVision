import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gradient-to-br from neutral-900 to neutral-800">
            <div className="max-w-xl space-y-6">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Earth's Exhale
                </motion.h1>
                <p className="text-gray-300">
                    "Earth Exhale" symbolize the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
                </p>
                <div className="flex gap-4">
                    <button className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-400 transition">
                        Buy Now
                    </button>
                    <button className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-400 transition">
                        <Play size={16} /> Live Demo
                    </button>
                </div>
            </div>

            <motion.img
                src="/assets/plants/green-bush.png" alt="plant" className="w-80 md:w-96 mt-10 md:mt-0 rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            />
        </section>
    );
}