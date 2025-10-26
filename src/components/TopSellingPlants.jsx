import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { topSellingPlants } from "../data/plantsData";

export default function TopSellingPlants() {
    return (
        <section className="px-10 py-20 bg-neutral-800">
            <h2 className="text-3xl font-bold text-center mb-10">
                Our Top Selling Plants
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {topSellingPlants.map((plant, i) => (
                    <motion.div
                        key={i}
                        className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-green-400/20"
                        whileHover={{ y: -5 }}>
                        <img src={plant.img} alt={plant.name} className="w-32 h-32 mb-4 object-contains" />
                        <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                        <p className="text-gray-400 mb-3 text-sm">{plant.desc}</p>
                        <p className="font-semibold text-green-400 mb-4">{plant.price}</p>
                        <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:bg-green-500 hover:text-black transition">
                            Buy <ShoppingBag size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}





// import React from "react";
// import { motion } from "framer-motion";
// import { ShoppingBag } from "lucide-react";
// import { topSellingPlants } from "../data/plantsData";

// export default function TopSellingPlants() {
//     return (
//         <section className="px-10 py-20 bg-neutral-800 text-white">
//             <h2 className="text-3xl font-bold text-center mb-10">
//                 Our Top Selling Plants
//             </h2>

//             <div className="grid md:grid-cols-3 gap-8">
//                 {topSellingPlants.map((plant, i) => (
//                     <motion.div
//                         key={i}
//                         className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-green-400/20 transition-transform"
//                         whileHover={{ y: -5 }}
//                     >
//                         <img
//                             src={plant.img}
//                             alt={plant.name}
//                             className="w-32 h-32 mb-4 object-contain"
//                         />
//                         <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
//                         <p className="text-gray-400 mb-3 text-sm">{plant.desc}</p>
//                         <p className="font-semibold text-green-400 mb-4">{plant.price}</p>
//                         <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:bg-green-500 hover:text-black transition">
//                             Buy <ShoppingBag size={16} />
//                         </button>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }
