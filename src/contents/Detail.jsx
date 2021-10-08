import React from "react";
import CardDetails from "../components/CardDetails";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import Navbar from "../components/Navbar";

const Detail = () => {
    return (
        <div className="font-inter space-y-12">
            <Navbar />
            <main className="relative space-y-14">
                <section className="container mx-auto text-primary">
                    <div className="flex flex-row gap-10">
                        <ImageGallery />
                        <CardDetails />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Detail;
