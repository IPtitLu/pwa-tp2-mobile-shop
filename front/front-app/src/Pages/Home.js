import React from "react";
import Footer from "../Components/Footer";
import CardsList from "../Components/CardsList";
import Categories from "../Components/Categories";
import { useLocation } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full flex justify-center bg-white max-h-screen">
            <div className="w-full max-w-md relative max-h-screen bg-card-gray">
                <p className="text-3xl font-bold text-center my-10">Watchup</p>
                <div className="w-full">
                    <Categories />
                </div>
                <div className="w-full">
                    <CardsList />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
