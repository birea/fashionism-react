import React from "react";
import logo from "../assets/fashionism-logo.png";
import Button from "./Button";

const NavbarTransaction = () => {
    return (
        <nav className="sticky top-0 z-10 bg-primary px-16 py-6 w-full">
            <div className="flex justify-center items-center">
                <Button type="link" href="/">
                    <img src={logo} alt="Fashionism Logo" className="w-64" />
                </Button>
            </div>
        </nav>
    );
};

export default NavbarTransaction;
