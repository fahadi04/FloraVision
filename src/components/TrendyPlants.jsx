import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from 'lucide-react';

export default function TrendyPlants() {
    return (
        <section className="px-10 py-20 bg-neutral-900">
            <h2 className="text-3xl font-bold text-center mb-10">
                Our trendy Plants
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
                <motion.div className="bg-neutral-800 rounded-2xl p-6 flex items-center justify-between"
                    whileHover={{ scale: 1.02 }}>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            For Your Desk Decorations.
                        </h3>
                        <p className="text-gray-400 mb-2">
                            I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference.
                        </p>
                        <p className="font-semibold text-green-400">599</p>
                        <button className="mt-4 flex items-center gap-2 border px-4 py-1 rounded-lg hover:bg-green-500 hover:text-black transition">
                            Explore<ShoppingBag size={16} />
                        </button>
                    </div>
                    <img src="/assets/plants/plantain-lilies.png" alt="Desk Plant" className="w-32 h-32 object-contain" />
                </motion.div>

                <motion.div className="bg-neutral-800 rounded-2xl p-6 flex items-center justify-between"
                    whileHover={{ scale: 1.02 }}>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            For Your Desk Decorations
                        </h3>
                        <p className="text-gray-400 mb-2">
                            The greener adds a touch of nature and srenity to your desk, making it feel calming and peaceful.
                        </p>
                        <p className="font-semibold text-green-400">399</p>
                        <button className="mt-4 flex items-center gap-2 border px-4 py-1 rounded-lg hover:bg-green-500 hover:text-black transition">
                            Explore<ShoppingBag size={16} />
                        </button>
                    </div>
                    <img src="/assets/plants/cactus.png" alt="Desk Plant" className="w-32 h-32 object-contain" />
                </motion.div>
            </div>
        </section>
    )
}