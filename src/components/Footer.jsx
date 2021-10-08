import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagram,
    faTwitter,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

const Footer = () => {
    return (
        <footer className="bg-primary mt-20">
            <div className="container flex flex-row mx-auto py-12 justify-between">
                <div className="text-white space-y-6">
                    <a
                        href="https://facebook.com/hallwack"
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <p className="text-lg font-medium">Facebook</p>
                    </a>
                    <a
                        href="https://instagram.com/raihanadamstagram"
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                        <p className="text-lg font-medium">Instagram</p>
                    </a>
                    <a
                        href="https://twitter.com/naonaisiaanying"
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                        <p className="text-lg font-medium">Twitter</p>
                    </a>
                    <a
                        href="https://facebook.com/hallwack"
                        className="flex flex-row items-center space-x-3 text-3xl"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <p className="text-lg font-medium">Whatsapp</p>
                    </a>
                </div>
                <div className="flex flex-col space-y-6 text-white text-lg font-medium">
                    <a href="/help">Help & FAQ</a>
                    <a href="/sitemap">Sitemap</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/about">About</a>
                </div>
                <div className="flex flex-col text-white">
                    <h3 className="text-3xl font-semibold">Be First!</h3>
                    <p className="text-lg">
                        Sign up for email alerts for exclusive offers and first
                        access to product
                    </p>
                    <form action="post" className="mt-3">
                        <input
                            type="email"
                            name="inputEmail"
                            id="inputEmail"
                            className="text-primary w-3/5 rounded-md border-sky-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                            placeholder="example@email.com"
                        />
                        <Button
                            className="ml-2 px-4 py-2 rounded text-lg"
                            bg="tertiary"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
            <section className="py-1 text-center text-white bg-primary border-t border-white border-opacity-50">
                Copyright | Raihan Adam 2021
            </section>
        </footer>
    );
};

export default Footer;
