import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";

function App() {
    const userData = localStorage.getItem("user");
    console.log(userData);
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        userData != null ? <Home /> : <Navigate to="/profile" />
                    }
                />
                ;
                <Route
                    path="/home"
                    element={
                        userData != null ? <Home /> : <Navigate to="/profile" />
                    }
                />
                <Route
                    path="/produit/:id"
                    element={
                        userData != null ? (
                            <Product />
                        ) : (
                            <Navigate to="/profile" />
                        )
                    }
                />
                <Route
                    path="/cart"
                    element={
                        userData != null ? <Cart /> : <Navigate to="/profile" />
                    }
                />
                <Route
                    path="/profile"
                    element={
                        userData == null ? <Profile /> : <Navigate to="/home" />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
