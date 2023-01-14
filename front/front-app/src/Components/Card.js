import { React } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Card = ({ watchInfo }) => {
    return (
        <li
            key={watchInfo._id}
            className="bg-white mx-4 flex items-center justify-end flex-col w-1/4 mt-5 px-4 card-item rounded-custom drop-shadow-xl hover:scale-105  ease-in-out duration-200


        "
        >
            <Link to={`/produit/${watchInfo._id}`}>
                <img
                    src={watchInfo.image}
                    alt="watch"
                    className="w-full max-h-22 object-cover"
                />
                <h3 className="my-2 font-medium">{watchInfo.nom}</h3>
                <p className="mt-2 mb-4 font-bold text-orange">
                    {watchInfo.prix}
                </p>
            </Link>
        </li>
    );
};

export default Card;
