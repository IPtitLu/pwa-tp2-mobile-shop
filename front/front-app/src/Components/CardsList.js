import { React, useState, useEffect } from "react";
import Card from "./Card";
import watch from "../Assets/watch.png";
import WatchesData from "./WatchesData";

const CardsList = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        console.log(state)
        async function fetchData() {
            const response = await fetch("http://localhost:3000/articles");
            const data = await response.json();
            console.log(data);
            setState(data);
        }
        fetchData();
    }, []);

    return (
        <ul className="flex justify-center flex-wrap card-list overflow-y-scroll">
            {state.map((watch) => (
                <Card watchInfo={watch} />
            ))}
        </ul>
    );
};

export default CardsList;
