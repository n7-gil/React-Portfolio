import React from 'react';
import "../styles/Footer.css"
import Resume from '../assets/images/resume2.PNG';

export default function Footer() {
    return (
        <footer>
            <ul>
                <li class="footer-item"><a href="mailto:gilbertoaescobedo@gmail.com">Email</a></li>
                <li class="footer-item"><a href={Resume}>Resume</a></li>
                <li class="footer-item"><a href="https://github.com/n7-gil" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
            <h3>
                Designed and made by Gilberto Escobedo &copy; 2022 N7-Gil
            </h3>
        </footer>
    )
}