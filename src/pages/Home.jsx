import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendyPlants from "../components/TrendyPlants";
import TopSellingPlants from "../components/TopSellingPlants";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TrendyPlants />
            <TopSellingPlants />
            <Footer />
        </>
    )
}