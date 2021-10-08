import React from "react";
import CardCart from "../components/CardCart";
import NavbarTransaction from "../components/NavbarTransaction";
import TransactionDetails from "../components/TransactionDetails";

const Checkout = () => {
    return (
        <div className="font-inter space-y-12">
            <NavbarTransaction />
            <main className="relative space-y-14">
                <section className="container mx-auto text-primary space-y-6">
                    <h1 className="text-3xl font-bold">My Shopping Cart</h1>
                    <div className="flex gap-4">
                        <CardCart />
                        <TransactionDetails />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Checkout;
