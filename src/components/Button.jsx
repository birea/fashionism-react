import React from "react";
import propTypes from "prop-types";
import cx from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Button = ({
    className,
    bg,
    shadow,
    isExternal,
    href,
    type,
    children,
    isLoading,
    isDisable,
    onClick,
}) => {
    const funcOnClick = () => {
        if (onClick) onClick();
    };

    if (isLoading || isDisable) {
        return (
            <span
                className={cx(
                    `bg-gray-primary text-primary bg-opacity-30 cursor-default ${className}`,
                    { "flex items-center": isLoading }
                )}
                disabled={isDisable ? "disabled" : ""}
            >
                {isLoading ? (
                    <>
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className="animate-spin text-primary"
                        />
                        <span className="text-primary ml-3">Loading....</span>
                    </>
                ) : (
                    children
                )}
            </span>
        );
    }

    if (type === "link") {
        if (isExternal) {
            return (
                <a
                    href={href}
                    className={cx(className, {
                        "bg-primary text-white focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-80":
                            bg === "primary",
                        "bg-gray-primary text-primary focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-opacity-80 focus:ring-offset-primary":
                            bg === "secondary",
                        "bg-gray-primary text-white bg-opacity-30":
                            bg === "tertiary",
                        "shadow-md hover:shadow-none transition duration-300":
                            shadow === "md",
                        "shadow-lg hover:shadow-none transition duration-300":
                            shadow === "lg",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
        } else {
            return (
                <Link
                    to={href}
                    className={cx(className, {
                        "bg-primary text-white focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-80":
                            bg === "primary",
                        "bg-gray-primary text-primary focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-opacity-80 focus:ring-offset-primary":
                            bg === "secondary",
                        "bg-gray-primary text-white bg-opacity-30":
                            bg === "tertiary",
                        "shadow-md hover:shadow-none transition duration-300":
                            shadow === "md",
                        "shadow-lg hover:shadow-none transition duration-300":
                            shadow === "lg",
                    })}
                    onClick={funcOnClick}
                >
                    {children}
                </Link>
            );
        }
    }

    return (
        <button
            type={type}
            className={cx(className, {
                "bg-primary text-white focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-opacity-80":
                    bg === "primary",
                "bg-gray-primary text-primary focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-opacity-80 focus:ring-offset-primary":
                    bg === "secondary",
                "bg-gray-primary text-white bg-opacity-30": bg === "tertiary",
                "shadow-md hover:shadow-none transition duration-300":
                    shadow === "md",
                "shadow-lg hover:shadow-none transition duration-300":
                    shadow === "lg",
            })}
            onClick={funcOnClick}
        >
            {children}
        </button>
    );
};

export default Button;

Button.propTypes = {
    type: propTypes.oneOf(["button", "link", "submit"]),
    onClick: propTypes.func,
    className: propTypes.string,
    bg: propTypes.string,
    shadow: propTypes.string,
    isExternal: propTypes.bool,
    href: propTypes.string,
    children: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array,
        propTypes.arrayOf(propTypes.element),
    ]),
    isDisable: propTypes.bool,
    isLoading: propTypes.bool,
};
