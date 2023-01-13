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
                <div className="w-full max-h-screen profile-page flex justify-center items-center flex-col px-10">
                    <h3 className="w-full text-center font-bold text-3xl mb-10">
                        Profile page
                    </h3>
                    <h4 className="w-full text-center font-bold text-1xl mb-10">
                        Coming soon ⌛⌛⌛
                    </h4>
                    <form className="w-full flex justify-center flex-col items-center ">
                        <label className="mb-5 w-full">
                            <input
                                type="email"
                                value=""
                                onChange=""
                                placeholder="Email"
                                className="w-full border-2 px-4 py-4 border-orange input"
                            />
                        </label>
                        <label className="mb-10 w-full ">
                            <input
                                type="password"
                                value=""
                                onChange=""
                                placeholder="Password"
                                className="w-full border-2 px-4 py-4 border-orange input"
                            />
                        </label>
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full h-max px-4 py-3 ml-10 mr-10 bg-orange text-white mx-2 mt-8 mb-5 categorie-item font-semibold drop-shadow-lg hover:bg-white hover:text-orange ease-in-out duration-200"
                        />
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Cart;
