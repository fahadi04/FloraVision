import React from "react";
import img1 from "../assets/Nav-img/plant 1.png"; // your logo image

export default function Footer() {
    return (
        <footer className="bg-[#0b2e13] text-gray-200 py-12 px-8 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Left Section */}
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <img src={img1} alt="FloraVision Logo" className="h-12 w-12 object-contain" />
                        <h2 className="text-2xl font-bold text-white">FloraVision.</h2>
                    </div>
                    <p className="text-gray-300 max-w-xs mb-6 leading-relaxed">
                        "From lush indoor greens to vibrant outdoor blooms, our plants are crafted
                        to thrive and elevate your living environment."
                    </p>

                    <div className="flex space-x-6 text-sm font-medium">
                        <span className="hover:text-green-400 cursor-pointer">FB</span>
                        <span className="hover:text-green-400 cursor-pointer">TW</span>
                        <span className="hover:text-green-400 cursor-pointer">LI</span>
                    </div>
                </div>

                {/* Middle Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Link’s</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-green-400 cursor-pointer">Home</li>
                        <li className="hover:text-green-400 cursor-pointer">Type’s Of Plant’s</li>
                        <li className="hover:text-green-400 cursor-pointer">Contact</li>
                        <li className="hover:text-green-400 cursor-pointer">Privacy</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">For Every Update.</h3>
                    <div className="flex border border-green-700 rounded overflow-hidden max-w-sm">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 bg-transparent text-gray-200 focus:outline-none placeholder-gray-400"
                        />
                        <button className="bg-green-500 text-black font-semibold px-4 hover:bg-green-400 transition">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-gray-400 text-sm mt-10 border-t border-green-800 pt-4">
                FloraVision © All right reserve
            </div>
        </footer>
    );
}
