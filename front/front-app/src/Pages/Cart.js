import { React, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import watchImg from "../Assets/watch.png";
import { FaArrowLeft } from "react-icons/fa";
import WatchesData from "../Components/WatchesData";
import CartCard from "../Components/CartCard";

const Cart = () => {
    return (
        <div className="w-full flex justify-center bg-white max-h-screen">
            <div className="w-full max-w-md relative max-h-screen bg-card-gray mx-2 flex items-center flex-col">
                <div className="w-full flex flex-row justify-center items-center mb-8">
                    <a href="/home" className="w-2/4 mt-10 ml-4 pl-4 button">
                        <FaArrowLeft className="w-6 h-6 hover:color-orange  border-0 border-orange hover:color-orange hover:border-b-4 h-19 ease-in-out duration-100" />
                    </a>
                    <h2 className="w-2/4 font-bold text-2xl mt-10 mr-4 pr-4 text-right">
                        My cart
                    </h2>
                </div>
                <ul className="flex justify-center flex-wrap card-list overflow-y-scroll">
                    {WatchesData.map((watch) => (
                        <CartCard watchInfo={watch} />
                    ))}
                </ul>
                <div className="w-full flex justify-between align-center mt-6">
                    <h4 className="font-medium text-1xl ml-12">Total</h4>
                    <h4 className="font-bold text-orange text-1xl mr-12">
                        300€
                    </h4>
                </div>
                <div className="w-full flex justify-center">
                    {" "}
                    <button
                        className="w-full h-max px-4 py-3 ml-10 mr-10 bg-orange text-white mx-2 mt-8 mb-5 categorie-item font-semibold drop-shadow-lg hover:bg-white hover:text-orange ease-in-out duration-200

                "
                    >
                        Buy now
                    </button>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Cart;
