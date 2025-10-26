import React from "react";
import img1 from "../assets/Nav-img/plant 1.png"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-6 bg-neutral-950/70 backdrop-blur-md sticky top-0 z-50">
            <img src={img1} alt="nav-logo" />
            <h1 className="text-2xl font-bold text-green-400">
                FloralVsion.
            </h1>
            <ul className="flex space-x-8 text-gray-300">
                <li className="hover:text-green-400 cursor-pointer">Home</li>
                <li className="hover:text-green-400 cursor-pointer">Plants type</li>
                <li className="hover:text-green-400 cursor-pointer">More</li>
                <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>
        </nav>
    )
}