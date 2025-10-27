import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Star } from "lucide-react";
import plantImg from "../assets/plants/Aglaonema.png.png"; 

export default function HeroSection() {
    return (
        <section
            className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 min-h-screen text-white overflow-hidden"
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-[1px]"></div>

            {/* Left Content */}
            <div className="relative z-10 max-w-xl space-y-6 mt-24 md:mt-0">
                <motion.h1
                    className="text-6xl font-extrabold text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Earth’s Exhale
                </motion.h1>

                <p className="text-gray-200 leading-relaxed">
                    "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
                    environment and its essential role in sustaining life.
                </p>

                <div className="flex gap-4">
                    <button className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-400 transition font-medium">
                        Buy Now
                    </button>
                    <button className="flex items-center gap-2 border border-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition font-medium">
                        <Play size={18} /> Live Demo
                    </button>
                </div>

                {/* Customer Review Card */}
                <motion.div
                    className="bg-white/10 backdrop-blur-md p-4 rounded-2xl w-72 mt-10 shadow-md border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://randomuser.me/api/portraits/women/45.jpg"
                            alt="user"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-white">Ronnie Hamill</p>
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-3">
                        I can't express how thrilled I am with my new natural plants! They
                        bring such a fresh and vibrant energy to my home.
                    </p>
                </motion.div>
            </div>

            {/* Right Floating Plant Card */}
            <motion.div
                className="relative z-10 mt-10 md:mt-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-72 text-center shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={plantImg}
                    alt="Aglaonema Plant"
                    className="w-40 h-40 mx-auto mb-4 object-contain"
                />
                <h4 className="text-sm text-gray-300">Indoor Plant</h4>
                <h3 className="text-xl font-semibold mb-2 text-white">
                    Aglaonema Plant
                </h3>
                <button className="mt-3 bg-green-500 px-5 py-2 rounded-full hover:bg-green-400 transition font-medium">
                    Buy Now
                </button>
            </motion.div>
        </section>
    );
}
