import { React, useState , useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";

const CartCard = ({ productInfo }) => {

    const [currentUser, setCurrentUser] = useState([])



    useEffect(()=> {
        async function getUser() {
            
            const userData =  localStorage.getItem("user");
            const response = await fetch(`http://localhost:3000/users_by_username/${userData}`);
            const data = await response.json();
            console.log(data);
            setCurrentUser(data);
        
        }
        getUser();
    }, []);

    
    function deleteFromCart() {
        return axios.put(`http://localhost:3000/delete-article/${currentUser._id}/${productInfo._id}`)
        .then(window.location.reload()) 
        .catch(error => {
          console.log(error);
          throw error;
        });
       

}




    return (
        <li
            key={productInfo._id}
            className="bg-white mx-4 flex items-center justify-around flex-row w-full mt-5 px-4 py-4 rounded-custom drop-shadow-xl


        "
        >
            <img
                src={productInfo.image}
                alt="watch"
                className="max-w-20 max-h-20 object-cover"
            />
            <div>
                <h3 className="my-2 font-medium">{productInfo.nom}</h3>
                <p className="mt-2 mb-4 font-bold text-orange">
                    {productInfo.prix}€
                </p>
            </div>
            <button onClick={deleteFromCart}
                href="profile"
                className="p-2.5 border-0 border-orange hover:border-b-4 h-19 ease-in-out duration-100"
            >
                <FaTrash className="w-5 h-5" />
            </button>
        </li>
    );
};

export default CartCard;
