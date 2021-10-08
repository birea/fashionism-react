import React from "react";
import Cart from "./Cart";
import User from "./User";
import logo from "../assets/fashionism-logo.png";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10 bg-primary px-16 py-6 w-full">
            <div className="flex justify-between items-center">
                <Button type="link" href="/">
                    <img src={logo} alt="Fashionism Logo" className="w-64" />
                </Button>
                <div>
                    <ul className="flex flex-row text-white space-x-12 text-lg font-semibold mr-36">
                        <li>
                            <Button type="link" href="/category/men">
                                MEN
                            </Button>
                        </li>
                        <li>
                            <Button type="link" href="/category/women">
                                WOMEN
                            </Button>
                        </li>
                        <li>
                            <Button type="link" href="/category/kids">
                                KIDS
                            </Button>
                        </li>
                        <li>
                            <Button type="link" href="/about">
                                ABOUT
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row text-white space-x-12">
                    <Cart />
                    <User />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
