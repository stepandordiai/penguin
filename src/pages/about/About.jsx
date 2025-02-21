import { useEffect } from "react";
import "./About.scss";

function About() {
    useEffect(() => {
        let chars = document.querySelectorAll(".main-info-about-me span");
        chars.forEach((char, index) => {
            setTimeout(() => {
                setTimeout(() => {
                    char.classList.add("active-lol");
                }, index * 100);
            }, 4000);
        });
    }, []);

    return (
        <div className="about-me-container section" id="section1">
            <h1 className="main-info-about-me">
                <span>H</span>
                <span>i</span>
                <span>,</span>
                <span> I</span>
                <span>'</span>
                <span>m </span>
                <span>J</span>
                <span>o</span>
                <span>h</span>
                <span>n </span>
                <span>D</span>
                <span>o</span>
                <span>e</span>
                <br />
                <span>F</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
                <span>t </span>
                <span>e</span>
                <span>n</span>
                <span>d </span>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
            </h1>
            <p className="info-about-me">
                Skilled Front-end Developer with 4 years of experience in
                designing, developing and maintaining front-end web
                applications. Achieved measurable success in increasing page
                load speeds by 20% which lead to an increase in website
                conversion rates. Led the implementation of new front-end
                development system which resulted in a 15% reduction in
                development time and a 20% increase in website performance.
                Adept in collaborating with cross-functional teams and
                delivering projects on-time and on-budget.
            </p>
            <div className="about-btn-container">
                <a className="about-btn" href="#section4">
                    Contact me
                </a>
            </div>
        </div>
    );
}

export default About;
