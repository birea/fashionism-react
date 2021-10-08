import React from "react";
import Button from "./Button";

const CardDetails = () => {
    return (
        <div className="w-1/3 space-y-4">
            <h1 className="text-5xl font-bold">Jamir</h1>
            <span className="text-sm">Category: T-Shirt, Men</span>
            <p className="leading-snug text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                error minus magnam quisquam aperiam perspiciatis ut nam sed?
                Quidem, debitis.
            </p>
            <p className="text-xl font-medium">Price: IDR 189,000</p>
            <div>
                <Button
                    type="submit"
                    bg="primary"
                    shadow="lg"
                    className="px-5 py-2 rounded text-lg font-semibold"
                >
                    Add To Cart
                </Button>
            </div>
        </div>
    );
};

export default CardDetails;
