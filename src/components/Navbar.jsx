import React from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import img1 from "../assets/Nav-img/plant 1.png";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-green-900 backdrop-blur-md text-white py-4 px-2 flex items-center justify-between shadow-md">

            <div className="flex items-center space-x-4">
                <img
                    src={img1}
                    alt="nav-logo"
                    className="object-contain drop-shadow-lg"
                />
                <h1 className="text-3xl font-extrabold text-green-400 tracking-wide">
                    FloraVision.
                </h1>
            </div>

            <ul className="hidden md:flex space-x-10 text-gray-300 font-medium">
                <li className="hover:text-green-400 transition-colors cursor-pointer">Home</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Plants Type</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">More</li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">Contact</li>
            </ul>

            <div className="flex items-center space-x-6">
                <Search className="w-6 h-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
                <ShoppingBag className="w-6 h-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
                <Menu className="w-7 h-7 text-gray-300 hover:text-green-400 cursor-pointer transition-colors " />
            </div>
        </nav>
    );
}
