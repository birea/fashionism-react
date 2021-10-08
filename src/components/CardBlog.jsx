import React from "react";

const CardBlog = ({ classLink, classText, title, highlights, image, link }) => {
    return (
        <a
            href={link}
            className={`bg-cover rounded md ${classLink}`}
            style={image}
        >
            <div className={`text-left ml-10 ${classText}`}>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="text-lg font-medium">{highlights}</p>
            </div>
        </a>
    );
};

export default CardBlog;
