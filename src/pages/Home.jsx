import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendyPlants from "../components/TrendyPlants";
import TopSellingPlants from "../components/TopSellingPlants";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import bgImg from "../assets/bg-img.jpg";
import OurBestO2 from "../components/OurBest02";

export default function Home() {
    return (
        <div className="text-white min-h-screen">
            <Navbar />

            <div
                className="relative text-white flex flex-col justify-center items-center"
                style={{
                    marginTop:"5rem",
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center", 
        
                }}
            >
                <div className="w-full">
                    <HeroSection />
                    <TrendyPlants />
                </div>
            </div>

            <TopSellingPlants />
            <CustomerReviews />
            <OurBestO2/>
            <Footer />
        </div>
    );
}
