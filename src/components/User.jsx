import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const User = () => {
    return (
        <div>
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
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
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
                            <Popover.Panel className="absolute top-16 right-12">
                                <div className="overflow-hidden rounded bg-gray-600 space-y-2 shadow-md ring-1 ring-primary ring-opacity-30 px-4 py-3 w-full">
                                    {/* NOTE: For Guest  */}
                                    {/* <div className="flex flex-col p-1">
                                        <label
                                            htmlFor="loginEmail"
                                            className="text-white font-medium text-lg pb-1"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="loginEmail"
                                            id="loginEmail"
                                            className="text-primary rounded-md h-10 border-sky-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="flex flex-col p-1">
                                        <label
                                            htmlFor="loginPassword"
                                            className="text-white font-medium text-lg pb-1"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="loginPassword"
                                            id="loginPassword"
                                            className="text-primary rounded-md h-10 border-sky-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                            placeholder="Password"
                                        />
                                    </div> */}
                                    {/* <div className="flex flex-col gap-3 p-1">
                                        <Button
                                            type="link"
                                            href="/register"
                                            className="rounded-md w-full py-3 px-8"
                                            bg="primary"
                                        >
                                            Register
                                        </Button>
                                        <Button
                                            type="submit"
                                            className="rounded-md w-full py-3 px-8"
                                            bg="primary"
                                        >
                                            Login
                                        </Button>
                                    </div> */}

                                    {/* NOTE: For User */}
                                    <div className="flex flex-col gap-3 p-2">
                                        <Button
                                            type="link"
                                            href="/settings"
                                            bg="primary"
                                            className="flex items-center gap-4 rounded-md w-full py-3 px-5"
                                        >
                                            <FontAwesomeIcon
                                                icon={faCog}
                                                className="mx-3"
                                            />
                                            Settings
                                        </Button>
                                        <Button
                                            type="link"
                                            href="/signout"
                                            bg="primary"
                                            className="flex items-center gap-4 rounded-md w-full py-3 px-5"
                                        >
                                            <FontAwesomeIcon
                                                icon={faSignOutAlt}
                                                className="mx-3"
                                            />
                                            Sign Out
                                        </Button>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default User;
