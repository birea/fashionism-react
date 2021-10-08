import React from "react";
import menBannerLeft from "../assets/men-banner-left.png";
import womenBannerRight from "../assets/women-banner-right.png";
import Button from "./Button.jsx";

const Hero = ({ refHotProducts }) => {
    const showHotProducts = () => {
        window.scrollTo({
            top: refHotProducts.current.offsetTop - 50,
            behavior: "smooth",
        });
    };
    return (
        <section className="w-full bg-gray-100">
            <div className="flex flex-row justify-between">
                <img
                    src={menBannerLeft}
                    className="w-3/12"
                    alt="Men Banner Model"
                />
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-6xl font-extrabold text-primary">
                        The Future of Fashion
                    </h1>
                    <p className="text-primary font-medium text-xl">
                        Choose your best fits here!
                    </p>
                    <Button
                        className="px-4 py-2 rounded font-semibold"
                        bg="primary"
                        shadow="lg"
                        onClick={showHotProducts}
                    >
                        EXPLORE NOW
                    </Button>
                </div>
                <img
                    src={womenBannerRight}
                    className="w-3/12"
                    alt="Women Banner Model"
                />
            </div>
        </section>
    );
};

export default Hero;
