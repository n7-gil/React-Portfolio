import React from 'react';

export default function Project() {
    return (
        <div>
            <section class="content">
                <article id="about-me" class="subject">
                    <img src="assets/images/potrait.jpg" target="_blank" rel="noreferrer" />
                    <h2>About Me</h2>
                    <p>
                        Hello world, my name is Gilberto Escobedo but you can all call me Gil. I am currently enrolled in a
                        UCR software engineering bootcamp.
                        I come from a humble background, growing up in an immigrant family that left everything behind in
                        search of a better life. <br />
                        I was taught at a very young age that you will have to fight and give it your all to accomplish your
                        goals. I wear my heart on my sleeve and dediciate myself in excelling in whatever task I'm assigned.
                        Prior to coding I have had a myraid of jobs starting from landscaping and fast food up down to
                        tattooing, working customer service with Sony,
                        repairing automation technologies for Costco.
                        I am currently a supervisor at Costco, where I find passion in guiding, teaching, and helping my
                        employees accomplish their goals.
                        I consider myself a major art enthusist in various art forms, including but not limited to; music,
                        photography, and tattoos.
                        When I'm not building websites I'm out attending concerts and plays, watching movies, visiting
                        museums, practicing my photography and playing video games.
                    </p>
                </article>


                <article id="work" class="subject">
                    <h2>Work</h2>
                    <div>
                        <a href="https://predevz.github.io/Platello/" target="_blank" rel="noreferrer">
                            <img src="assets/images/platello.PNG" img id="platello-snippet" />
                        </a>

                        <a href="https://n7gil-note-taker.herokuapp.com/" target="_blank" rel="noreferrer" >
                            <img src="assets/images/noteTaker.png" img id="note-snippet" />
                        </a>

                        <a href="https://n7-gil.github.io/Pop-Quiz/" target="_blank" rel="noreferrer">
                            <img src="assets/images/popquiz.png" img id="popquiz-snippet" />
                        </a>

                        <a href="https://pop-umai.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img src="assets/images/popUmai.PNG" img id="popumai-snippet" />
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