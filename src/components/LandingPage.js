import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import "../styles/LandingPage.module.css";
import Button from 'react-bootstrap/Button';


const LandingPage = () => {
    // Stores the items.
    // eslint-disable-next-line
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
            <Button>Add</Button>
            <p>To get full access please login or signup</p>
        </Container>
    )
}

export default LandingPage;