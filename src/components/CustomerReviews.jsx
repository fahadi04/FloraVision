import React from "react";
import { motion } from "framer-motion";

export default function CustomerReviews() {
    const reviews = [
        {
            name: "Aisha Khan",
            comment:
                "Absolutely love the quality and freshness of the plants! They’ve transformed my workspace.",
        },
        {
            name: "Ravi Patel",
            comment:
                "Fast delivery and beautiful packaging. The plants are healthy and vibrant!",
        },
        {
            name: "Meera Sharma",
            comment:
                "FloraVision has the best collection of indoor plants. Highly recommend!",
        },
    ];

    return (
        <section className="bg-[#1B2316] text-white text-center">
            <h2 className="text-3xl font-bold mb-10 text-green-400">
                What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <motion.div
                        key={i}
                        className="bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-green-400/20"
                        whileHover={{ scale: 1.03 }}
                    >
                        <p className="text-gray-300 mb-4 italic">"{review.comment}"</p>
                        <h3 className="font-semibold text-green-400">{review.name}</h3>
                    </motion.div>
                ))}
            </div>
            <hr className="bg-green-800"/>
        </section>
    );
}
