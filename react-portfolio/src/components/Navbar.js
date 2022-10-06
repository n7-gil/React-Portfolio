import React from 'react';
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <header>
            <h1>Gilberto Escobedo</h1>
            <nav>
                <ul>
                    <li class="nav-item"><a href="#home-container">Home</a></li>
                    <li class="nav-item"><a href="#about-me">About Me</a></li>
                    <li class="nav-item"><a href="#work">Work</a></li>
                    <li class="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

