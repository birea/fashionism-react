import React from "react";
import jamir1 from "../assets/JAMIR-V4-Y5-01 1.png";
import jamir2 from "../assets/JAMIR-V4-Y5-01.jpg";
import jamir3 from "../assets/JAMIR-V4-Y5-01_2.jpg";
import jamir4 from "../assets/JAMIR-V4-Y5-01_3.jpg";
import CardImage from "./CardImage";

const ImageGallery = () => {
    return (
        <div
            className="w-2/3 grid grid-cols-2 grid-flow-row gap-8"
            id="gallery-container"
        >
            <CardImage image={jamir1} altImage="Jamir 1" />
            <CardImage image={jamir2} altImage="Jamir 2" />
            <CardImage image={jamir3} altImage="Jamir 3" />
            <CardImage image={jamir4} altImage="Jamir 4" />
        </div>
    );
};

export default ImageGallery;
