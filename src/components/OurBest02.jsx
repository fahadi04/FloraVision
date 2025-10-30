import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/plants/Aglaonema.png.png";
import {ChevronLeft, ChevronRight } from "lucide-react";

export default function OurBestO2() {
    return (
        <section
            className="text-white py-20 flex flex-col items-center"
            style={{
                background: "linear-gradient(180deg, #1B2316 0%, #182012 50%, #10170C 100%)",
            }}
        >
            <div className="mb-16">
               
                <div className="flex justify-center items-center mb-8">
                    <h2 className="relative text-3xl font-bold text-white inline-block text-center">
                        <span className="relative inline-block px-8 py-2">
                            <span
                                className="absolute -left-6 top-0 w-6 h-6 border-l-4 border-t-4 rounded-tl-lg"
                                style={{ borderColor: "#9EB384" }}
                            ></span>

                            Our Best <span className="text-white">o2</span>

                            <span
                                className="absolute -right-6 bottom-0 w-6 h-6 border-r-4 border-b-4 rounded-br-lg"
                                style={{ borderColor: "#9EB384" }}
                            ></span>
                        </span>
                    </h2>
                </div>
                <div className="absolute -left-8 top-1/2 w-6 h-6 border-l-2 border-t-2 border-green-400 rounded-tl-md" />
                <div className="absolute -right-8 top-1/2 w-6 h-6 border-r-2 border-b-2 border-green-400 rounded-br-md" />
            </div>

            <motion.div
                className="flex flex-col md:flex-row items-center justify-between shadow-lg shadow-green-900/30 p-4 max-w-5xl"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(27,35,22,0.9) 0%, rgba(31,43,26,0.9) 50%, rgba(33,53,28,0.9) 100%)",
                    borderRadius: "10rem",
                }}
                whileHover={{ scale: 1.01 }}
            >
                <div className="w-full md:w-1/2 flex justify-center md:mb-0">
                    <img
                        src={Img1}
                        alt="O2 Plant"
                        className="w-[380px] h-[400px] object-cover drop-shadow-4xl -mt-10 relative z-10"
                    />

                </div>

                <div className="md:w-1/2 text-left space-y-8 p-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            We Have Small And Best O₂ Plants Collection’s
                        </h3>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Oxygen-producing plants, often referred to as “O₂ plants,” are those
                            that release oxygen into the atmosphere through the process of
                            photosynthesis.
                        </p>
                    </div>

                    <div>  <p className="text-gray-400 text-sm leading-relaxed">
                        Many plants can help filter out pollutants and toxins from the air,
                        such as formaldehyde, benzene, and trichloroethylene. This makes the
                        air cleaner and healthier to breathe.
                    </p>
                    </div>

                    <button className="border border-gray-500 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-green-500 hover:text-black transition">
                        Explore
                    </button>

                    <div className="flex items-center justify-end gap-4 mt-4 p-6 text-gray-400">
                        <ChevronLeft size={18} className="cursor-pointer hover:text-green-400" />
                        <span className="text-sm">01/04</span>
                        <ChevronRight size={18} className="cursor-pointer hover:text-green-400" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
