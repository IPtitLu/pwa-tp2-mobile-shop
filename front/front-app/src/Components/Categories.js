import { React, useState } from "react";
import Card from "./Card";

const Categories = () => {
    const [categories, setCategories] = useState([
        "Maserati",
        "Rolex",
        "Hublot",
        "Cartier",
        "Tudor",
    ]);

    return (
        <div className="flex mt-10 mb-4 flex-nowrap flex-row overflow-x-scroll h-16 pl-2">
            {categories.map((categorie) => (
                <button
                    className="w-max h-max px-4 py-3 bg-orange text-white mx-2 categorie-item font-semibold drop-shadow-lg hover:bg-white hover:text-orange ease-in-out duration-200

                "
                >
                    {categorie}
                </button>
            ))}
        </div>
    );
};

export default Categories;
