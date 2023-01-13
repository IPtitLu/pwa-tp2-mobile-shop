import { React } from "react";
import { FaTrash } from "react-icons/fa";

const Home = ({ watchInfo }) => {
    return (
        <li
            key={watchInfo.id}
            className="bg-white mx-4 flex items-center justify-around flex-row w-full mt-5 px-4 py-4 rounded-custom drop-shadow-xl


        "
        >
            <img
                src={watchInfo.image}
                alt="watch"
                className="max-w-20 max-h-20 object-cover"
            />
            <div>
                <h3 className="my-2 font-medium">{watchInfo.name}</h3>
                <p className="mt-2 mb-4 font-bold text-orange">
                    {watchInfo.price}
                </p>
            </div>
            <button
                href="profile"
                className="p-2.5 border-0 border-orange hover:border-b-4 h-19 ease-in-out duration-100"
            >
                <FaTrash className="w-5 h-5" />
            </button>
        </li>
    );
};

export default Home;
