import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Button from "./Button";

const Cart = () => {
    const [ItemCounter, setItemCounter] = useState(0);

    const itemPlus = () => {
        setItemCounter(ItemCounter + 1);
    };

    const itemMinus = () => {
        if (ItemCounter > 0) {
            setItemCounter(ItemCounter - 1);
        }
    };

    return (
        <Popover>
            {({ open }) => (
                <>
                    <Popover.Button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute top-16 right-32">
                            <div className="overflow-hidden rounded bg-gray-700 space-y-2 shadow-md ring-1 ring-primary ring-opacity-30 px-4 py-3 w-96">
                                <div className="flex items-center justify-between p-1">
                                    <img
                                        src="https://www.prada.com/content/dam/pradanux_products/1/1BD/1BD228/2BB0F0046/1BD228_2BB0_F0046_V_OJN_SLF.png"
                                        alt=""
                                        className="h-32"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-semibold">
                                            Jarim
                                        </h2>
                                        <p>Price: 30,000</p>
                                        <a href="/remove" className="underline">
                                            Remove
                                        </a>
                                    </div>
                                    <div className="flex justify-center items-center gap-3">
                                        <Button
                                            type="button"
                                            onClick={itemMinus}
                                        >
                                            <svg
                                                className="fill-current text-white w-3"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </Button>

                                        <p className="text-white px-2 font-semibold">
                                            {ItemCounter}
                                        </p>

                                        <Button
                                            type="button"
                                            onClick={itemPlus}
                                        >
                                            <svg
                                                className="fill-current text-white w-3"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-1">
                                    <img
                                        src="https://www.prada.com/content/dam/pradanux_products/1/1BD/1BD228/2BB0F0046/1BD228_2BB0_F0046_V_OJN_SLF.png"
                                        alt=""
                                        className="h-32"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-semibold">
                                            Jarim
                                        </h2>
                                        <p>Price: 30,000</p>
                                        <a href="/remove" className="underline">
                                            Remove
                                        </a>
                                    </div>
                                    <div className="flex justify-center items-center gap-3">
                                        <button>
                                            <svg
                                                className="fill-current text-white w-3"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>

                                        <p className="text-white px-2 font-semibold">
                                            5
                                        </p>

                                        <button>
                                            <svg
                                                className="fill-current text-white w-3"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr className="border border-white border-opacity-50" />
                                <Button
                                    type="submit"
                                    href="/checkout"
                                    className="w-full bg-primary rounded py-3 mt-4"
                                >
                                    Checkout
                                </Button>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default Cart;
