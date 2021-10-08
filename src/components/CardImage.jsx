import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Button from "./Button";

const CardImage = (props) => {
    const [openImage, setOpenImage] = useState(false);

    const openModal = () => {
        setOpenImage(true);
    };

    const closeModal = () => {
        setOpenImage(false);
    };

    return (
        <>
            <Button type="button" onClick={openModal}>
                <img
                    className="rounded-md shadow-md"
                    src={props.image}
                    alt={props.altImage}
                />
            </Button>

            <Transition appear show={openImage} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-20 overflow-y-auto bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-500"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-300"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block max-w-screen-sm p-6 my-8 text-right align-middle">
                                <img
                                    className="h-auto"
                                    src={props.image}
                                    alt={props.altImage}
                                />
                                <Button
                                    type="button"
                                    className="mt-5 text-primary font-inter text-lg font-semibold"
                                    onClick={closeModal}
                                >
                                    Close
                                </Button>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CardImage;
