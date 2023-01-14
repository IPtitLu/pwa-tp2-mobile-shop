import { React, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import WatchesData from "../Components/WatchesData";
import { FaArrowLeft } from "react-icons/fa";

const Product = () => {
    const [state, setState] = useState();
    const params = useParams();

    const watchId = params.id;
    useEffect(() => {
        console.log("letsgo")
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/articles/${watchId}`);
            const data = await response.json();
            console.log(data);
            setState(data);
        }
        fetchData();
    }, []);

    return (
        <div className="w-full flex justify-center bg-white max-h-screen">
           { state ? 
           <div className="w-full max-w-md relative max-h-screen bg-card-gray mx-2 flex items-center flex-col">
                <a href="/home" className="w-full mt-10 ml-4 pl-4 button">
                    <FaArrowLeft className="w-6 h-6 border-0 border-orange hover:color-orange hover:border-b-4 h-19 ease-in-out duration-100" />
                </a>
                <img
                    src={state.image}
                    alt="watch"
                    className="w-2/4 max-h-22 object-cover mt-12 mb-8"
                />
                <div className="ml-4 mr-4">
                    <h3 className="text-3xl font-semibold text-ledt my-4">
                        {state.nom}
                    </h3>
                    <p className="text-2xl font-bold text-orange text-left my-2">
                        {state.prix} €
                    </p>
                    <p className="font-medium text-left mb-2 mt-10">About</p>
                    <p className="font-light text-left my-2">aaa</p>
                    <button
                        className="w-full h-max px-4 py-3 bg-orange text-white mx-2 mt-8 mb-5 categorie-item font-semibold drop-shadow-lg hover:bg-white hover:text-orange ease-in-out duration-200

                "
                    >
                        Add to cart
                    </button>
                </div>

                <Footer />
            </div>              : <div>Loading...</div>
} 
        </div>
    );
};

export default Product;
