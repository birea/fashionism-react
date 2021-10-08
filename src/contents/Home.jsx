import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import HotProducts from "../components/HotProducts";
import Footer from "../components/Footer";

const Home = () => {
    const hotProductsRef = useRef(null);

    return (
        <div className="font-inter">
            <Navbar />
            <main className="relative space-y-14">
                <Hero refHotProducts={hotProductsRef} />
                <Banner />
                <Blogs />
                <HotProducts refHotProducts={hotProductsRef} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
