import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import styles from "../styles/LandingPage.module.css";
import Button from 'react-bootstrap/Button';


// Following code is written along with https://www.youtube.com/watch?v=MXId-Ae6k_I&t=4s.

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


    const deleteItem = (id) => {
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
    };


    // Stores the items.
    const [list, setList] = useState([]);
    // Keeps track on what the item value is.
    const [input, setInput] = useState("");

    return (
        <Container className={styles.Lcontainer} fluid="md">
            <h2>Try it out here <i class="fa-solid fa-arrow-down"></i></h2>
            <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button className={styles.AddButton} onClick={() => addItem(input)}>Add</Button>
            </div>
            <ul className={styles.List}>
                {list.map((item) => (
                    <li key={item.id}>
                        {item.item}
                        <i onClick={() => deleteItem(item.id)} class="fa-solid fa-delete-left fa-xl"></i>
                    </li>
                ))}
            </ul>
            <p>To get full access please login or signup</p>
        </Container>
    )
}

export default LandingPage;