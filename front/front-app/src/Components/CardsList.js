import { React, useState } from "react";
import Card from "./Card";
import watch from "../Assets/watch.png";
import WatchesData from "./WatchesData";

const Home = () => {
    return (
        <ul className="flex justify-center flex-wrap card-list overflow-y-scroll">
            {WatchesData.map((watch) => (
                <Card watchInfo={watch} />
            ))}
        </ul>
    );
};

export default Home;
