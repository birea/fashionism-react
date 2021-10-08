import React from "react";

const Card = (props) => {
    return (
        <div className="bg-gray-primary rounded-md shadow-md p-5">
            {props.children}
        </div>
    );
};

export default Card;
