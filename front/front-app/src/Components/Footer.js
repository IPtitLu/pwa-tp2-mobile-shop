import React from "react";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Footer = ({ token }) => {
    return (
        <footer className="w-full flex flex-row justify-between items-center nowrap bg-card-">
            <ul className="w-full flex flex-row justify-around items-center nowrap h-20">
                <li className="w-10 flex justify-center">
                    <a
                        href="/home"
                        className="p-2.5 border-0 border-orange hover:border-b-4 h-19 ease-in-out duration-100"
                    >
                        <FaHome className="w-6 h-6" />
                    </a>
                </li>
                <li className="w-10 flex justify-center">
                    <Link
                        to={`/cart/${token}`}
                        className="p-2.5 border-0 border-orange hover:border-b-4 h-19 ease-in-out duration-100"
                    >
                        <FaShoppingCart className="w-6 h-6" />
                    </Link>
                </li>
                <li className="w-10 flex justify-center">
                    <a
                        href="profile"
                        className="p-2.5 border-0 border-orange hover:border-b-4 h-19 ease-in-out duration-100"
                    >
                        <FaUser className="w-6 h-6 hover:color-orange" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
