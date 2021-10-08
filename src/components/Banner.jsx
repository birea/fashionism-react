import React from "react";
import discountBanner from "../assets/discount-banner.png";

const Banner = () => {
    const banner = {
        backgroundImage: `url(${discountBanner})`,
    };

    return (
        <section className="container mx-auto">
            <div
                className="w-4/5 mx-auto bg-cover rounded shadow-md"
                style={banner}
            >
                <div className="text-left ml-12 py-16">
                    <h2 className="text-primary text-4xl font-semibold">
                        BLACK FRIDAY DISCOUNT
                    </h2>
                    <p className="text-primary text-lg font-medium">
                        Use Code "BFFASHIONISM"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
