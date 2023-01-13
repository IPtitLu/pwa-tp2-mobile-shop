import { React, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { timeout } from "workbox-core/_private";

const Cart = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dataResponse, setDataResponse] = useState([]);

    const login = async (email, pass) => {
        console.log(email, pass);
        var data = JSON.stringify({
            username: email,
            password: pass,
        });

        var config = {
            method: "post",
            url: "http://localhost:3000/api/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        const responseData = "";

        axios(config)
            .then(function (response) {
                console.log("response du call api : ", response);
                if (response.status === 200) {
                    const responseData = response.data;
                    console.log("response .data", response.data);
                }
                if (response.status === 401) {
                    alert("Mot de passe ou mail incorrect");
                }
            })
            .catch(function (error) {
                setErrorMessage("Le mot de passe ou le mail est incorrect.");
                console.log("request error : ", error);
            });

        return responseData;
    };

    const tokenSender = async (data) => {
        console.log("data : ", data);
        if (typeof dataResponse && data.token !== null && typeof errorMessage) {
            console.log(dataResponse);
            setIsSubmitted(true);

            setTimeout(() => {
                console.log("setDataResponse : ", data.token);
                navigate("/home", { state: { token: data.token } });
            }, 1000);
        }
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let { email, pass } = document.forms[0];
        let data = await login(email.value, pass.value);

        let sendToken = await tokenSender(data);
    };

    const form = (
        <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center flex-col items-center "
        >
            <label className="mb-5 w-full">
                <input
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full border-2 px-4 py-4 border-orange input"
                />
            </label>
            <label className="mb-10 w-full ">
                <input
                    type="password"
                    name="pass"
                    required
                    placeholder="Password"
                    className="w-full border-2 px-4 py-4 border-orange input"
                />
            </label>
            {errorMessage ? (
                <p className="text-red-500 text-xs italic"> {errorMessage} </p>
            ) : (
                ""
            )}
            <input
                type="submit"
                value="Submit"
                className="w-full h-max px-4 py-3 ml-10 mr-10 bg-orange text-white mx-2 mt-8 mb-5 categorie-item font-semibold drop-shadow-lg hover:bg-white hover:text-orange ease-in-out duration-200"
            />
        </form>
    );

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
                    {isSubmitted ? (
                        <p>Login success, you can access now to your cart !</p>
                    ) : (
                        form
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Cart;
