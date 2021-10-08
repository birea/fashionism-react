import React from "react";
import CardProduct from "./CardProduct";
import jamir from "../assets/JAMIR-V4-Y5-01 1.png";
import jarim from "../assets/JARIM-V3-Y5-01 1.png";
import juqka from "../assets/JUQKA-V1-Y5-01 1.png";
import Button from "./Button";

const HotProducts = ({ refHotProducts }) => {
    return (
        <section className="container mx-auto" ref={refHotProducts}>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-3xl font-bold text-primary">
                        Hot Offer
                    </h2>
                    <Button
                        type="link"
                        href="/products"
                        className="text-lg text-primary font-medium underline hover:no-underline"
                    >
                        More Products
                    </Button>
                </div>
                <div className="grid gap-8 grid-flow-row grid-cols-4">
                    <CardProduct
                        image={jamir}
                        productLink="/products/jamir"
                        productName="Jamir"
                        productPrice="IDR 189,000"
                    />
                    <CardProduct
                        image={jarim}
                        productLink="/products/jarim"
                        productName="Jarim"
                        productPrice="IDR 189,000"
                    />
                    <CardProduct
                        image={juqka}
                        productLink="/products/juqka"
                        productName="Juqka"
                        productPrice="IDR 189,000"
                    />
                    <CardProduct
                        image={juqka}
                        productLink="/products/juqka"
                        productName="Juqka"
                        productPrice="IDR 189,000"
                    />
                </div>
            </div>
        </section>
    );
};

export default HotProducts;
