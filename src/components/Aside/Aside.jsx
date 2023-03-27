import React from "react";
import './Aside.css';
import ListItem from "../assets/ListItems/ListItem";

function Aside() {
    return (
        <aside>
            <h2>Communities</h2>
            <ul>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
        </aside>
    )
}

export default Aside;