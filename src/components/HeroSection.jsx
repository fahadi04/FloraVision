import React from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import plantImg from "../assets/plants/Aglaonema.png.png";

export default function HeroSection() {
    return (
        <section
            className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 min-h-screen text-white overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/bg/hero-bg.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

            <div className="relative z-10 max-w-xl space-y-6 mt-24 md:mt-0 py-10">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Earth’s Exhale
                </motion.h1>

                <div className="mb-10">
                    <p className="text-gray-200 leading-relaxed text-lg">
                        “Earth Exhale” symbolizes the purity and vitality of the Earth's
                        natural environment and its essential role in sustaining life.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <button className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-400 transition font-medium shadow-lg shadow-green-500/20">
                            Buy Now
                        </button>
                        <button className="flex items-center gap-2 border border-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition font-medium shadow-lg shadow-green-500/10">
                            <Play size={18} /> Live Demo
                        </button>
                    </div>
                </div>

                <motion.div
                    className="bg-white/10 backdrop-blur-md p-5 rounded-2xl w-80 mt-10 shadow-lg border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://randomuser.me/api/portraits/women/45.jpg"
                            alt="user"
                            className="w-10 h-10 rounded-full border border-white/30"
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
                        I can't express how thrilled I am with my new natural plants!
                        They bring such a fresh and vibrant energy to my home.
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="relative z-10 mt-16 md:mt-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-80 text-center shadow-[0_0_30px_rgba(0,255,100,0.2)]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src={plantImg}
                    alt="Aglaonema Plant"
                    className="w-56 h-56 mx-auto mb-4 object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                    }}
                />
                <h4 className="text-sm text-gray-300">Indoor Plant</h4>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                    Aglaonema Plant
                </h3>
                <button className="mt-3 bg-green-500 px-6 py-2 rounded-full hover:bg-green-400 transition font-medium shadow-md shadow-green-500/20">
                    Buy Now
                </button>
            </motion.div>
        </section>
    );
}
