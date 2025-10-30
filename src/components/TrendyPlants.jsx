import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import img1 from "../assets/plants/Agave.png.png";
import img2 from "../assets/plants/Plaintain-lillies.png.png";

export default function TrendyPlants() {
    return (
        <section
            className="
        relative px-10 py-20 bg-[#006400] text-white overflow-hidden
        before:content-[''] before:absolute before:top-0 before:right-0 before:w-32 before:h-32
        before:border-t-4 before:border-r-4 before:border-green-400 before:rounded-tr-3xl
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-32 after:h-32
        after:border-b-4 after:border-l-4 after:border-green-400 after:rounded-bl-3xl
        flex flex-col items-center gap-16
      "
        >
            <div className="flex justify-center items-center mb-12">
                <h2 className="relative text-3xl font-bold text-white inline-block text-center">
                    <span className="relative inline-block px-8 py-2">
                        <span
                            className="absolute -left-6 top-0 w-6 h-6 border-l-4 border-t-4 rounded-tl-lg"
                            style={{ borderColor: "#9EB384" }}
                        ></span>

                        Our Trendy Plants

                        <span
                            className="absolute -right-6 bottom-0 w-6 h-6 border-r-4 border-b-4 rounded-br-lg"
                            style={{ borderColor: "#9EB384" }}
                        ></span>
                    </span>
                </h2>
            </div>

            <motion.div
                className="
          relative flex flex-col md:flex-row-reverse items-center justify-around
          bg-white/10 backdrop-blur-40 rounded-full p-2 shadow-lg
          border border-white/20 hover:bg-white/20 transition-all duration-300
        "
                whileHover={{ scale: 1.02 }}
            >
                <img
                    src={img2}
                    alt="Agave Plant"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover drop-shadow-2xl mb-6 md:mb-0 -mt-8"
                />

                <div className="md:w-1/2 text-center md:text-left space-y-3">
                    <h3 className="text-2xl font-semibold text-white">
                        For Your Desk Decorations
                    </h3>
                    <p className="text-gray-200">
                        I recently added a beautiful desk decoration plant to my workspace,
                        and it has made such a positive difference!
                    </p>
                    <p className="font-semibold text-white text-lg">₹599/-</p>
                    <div className="flex flex-row gap-6">
                        <button className="mt-4 flex items-center gap-2 border border-white px-6 py-2 rounded-lg hover:bg-green-500 hover:text-black transition mx-auto md:mx-0">
                            Explore
                        </button>
                        <button className="mt-4 flex items-center gap-1 border border-white px-4 py-2 rounded-lg hover:bg-green-500 hover:text-black transition mx-auto md:mx-0">
                            <ShoppingBag size={16} />
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="
          relative flex flex-col md:flex-row-reverse items-center justify-around
          bg-white/10 backdrop-blur-40 rounded-full p-2 shadow-lg
          border border-white/20 hover:bg-white/20 transition-all duration-300
        "
                whileHover={{ scale: 1.02 }}
            >
                <img
                    src={img1}
                    alt="Plantain Lilies"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl mb-6 md:mb-0 -mt-8"
                />

                <div className="md:w-1/2 text-center md:text-left space-y-3">
                    <h3 className="text-2xl font-semibold text-white">
                        For Your Desk Decorations
                    </h3>
                    <p className="text-gray-200">
                        The greenery adds a touch of nature and serenity to my desk,
                        making it feel more inviting and calming.
                    </p>
                    <p className="font-semibold text-white text-lg">₹399/-</p>
                    <div className="flex flex-row gap-6">
                        <button className="mt-4 flex items-center gap-2 border border-white px-6 py-2 rounded-lg hover:bg-green-500 hover:text-black transition mx-auto md:mx-0">
                            Explore
                        </button>


                        <button className="mt-4 flex items-center gap-1 border border-white px-4 py-2 rounded-lg hover:bg-green-500 hover:text-black transition mx-auto md:mx-0">
                            <ShoppingBag size={16} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
