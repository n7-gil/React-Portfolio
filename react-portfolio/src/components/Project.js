import React from 'react';
import "../styles/Project.css";
import Potrait from '../assets/images/potrait.jpg';
import Plattelo from '../assets/images/platello.PNG';
import Popumai from '../assets/images/popUmai.PNG';

export default function Project() {
    return (
        <div>
            <section class="content">
                <article id="about-me" className='subject'>
                    <img src={Potrait} target="_blank" rel="noreferrer" />
                    <h2>About Me</h2>
                    <p>
                        I am currently a supervisor at Costco, where I find passion in guiding, teaching, and helping my
                        employees accomplish their goals.
                        I consider myself a major art enthusist in various art forms, including but not limited to; music,
                        photography, and tattoos.
                        When I'm not building websites I'm out attending concerts and plays, watching movies, visiting
                        museums, practicing my photography and playing video games.
                    </p>
                </article>


                <article id="work" className="subject">
                    <h2>Work</h2>
                    <div>
                        <a href="https://predevz.github.io/Platello/" target="_blank" rel="noreferrer">
                            <img src={Plattelo} img id="platello-snippet" />
                        </a>

                        <a href="https://pop-umai.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img src={Popumai} img id="popquiz-snippet" />
                        </a>
                    </div>

                </article>

                <article id="contact" class="subject">
                    <h2>Contact Me</h2>
                    <div>
                        <p>Phone Number-(951)289-8515</p>
                        <p>Email- gilbertoaescobedo@gmail.com</p>
                        <p><a href="https://www.linkedin.com/in/gilbertoaescobedo/">LinkedIn</a></p>
                    </div>

                </article>
            </section>
        </div>
    )
}