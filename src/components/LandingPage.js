import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import "../styles/LandingPage.module.css";
import Button from 'react-bootstrap/Button';


const LandingPage = () => {
    // When button is clicked a new item will be added.
    const addItem = (item) => {
        const newItem = {
            // the key(id) used for each list item.
            id: Math.random(),
            item: item,
        };

        // Adds an item to the list.
        setList([...list, newItem]);
        // Clears the input box.
        setInput("");
    };

    // Stores the items.
    const [list, setList] = useState([]);
    // Keeps track on what the item value is.
    const [input, setInput] = useState("");

    return (
        <Container fluid="md">
            <h1>Try it out here <i class="fa-solid fa-arrow-down"></i></h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={() => addItem(input)}>Add</Button>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {item.item}
                        <button>x</button>
                    </li>
                ))}
            </ul>
            <p>To get full access please login or signup</p>
        </Container>
    )
}

export default LandingPage;