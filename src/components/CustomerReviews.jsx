import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function CustomerReviews() {
    const reviews = [
        {
            name: "Shelly Russel",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            comment:
                "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
            rating: 5,
        },
        {
            name: "Lula Rolfson",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            comment:
                "Each one has its own unique charm and personality, and they’ve already started brightening up my space.",
            rating: 5,
        },
        {
            name: "Carol Huels",
            img: "https://randomuser.me/api/portraits/women/32.jpg",
            comment:
                "It’s like bringing a little piece of nature indoors. Definitely worth the investment!",
            rating: 5,
        },
    ];

    return (
        <section
            className="px-6 py-6 text-white"
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

                        Customer Reviews
                        <span
                            className="absolute -right-6 bottom-0 w-6 h-6 border-r-4 border-b-4 rounded-br-lg"
                            style={{ borderColor: "#9EB384" }}
                        ></span>
                    </span>
                </h2>
            </div>


            <div className="grid md:grid-cols-3 gap-10 justify-items-center">
                {reviews.map((review, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="rounded-md flex flex-col items-center text-center
                                   shadow-lg shadow-green-900/40 border border-transparent 
                                   transition-transform duration-300"
                        style={{
                            width: "275px",
                            height: "240px",
                            borderRadius: "2rem",
                            background: "linear-gradient(135deg, #1B2316 0%, #1f2b1a 50%, #21351c 100%)",
                            clipPath: "path('M0,0 Q150,10 320,0 L320,360 L0,360 Z')",
                        }}
                    >
                        <div className="flex items-center pt-6 mb-4">
                            <img
                                src={review.img}
                                alt={review.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-green-500 mr-4"
                            />
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">{review.name}</h3>
                                <div className="flex text-yellow-400">
                                    {[...Array(review.rating)].map((_, idx) => (
                                        <Star key={idx} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm m-2 p-4 ">
                            {review.comment}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
