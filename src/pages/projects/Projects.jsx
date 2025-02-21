import Project from "../../components/project/Project";
import "./Projects.scss";

function Projects() {
    addEventListener("scroll", () => {
        if (
            document.querySelector(".portfolio-info").getBoundingClientRect()
                .top < window.innerHeight
        ) {
            document
                .querySelector(".portfolio-info")
                .classList.add("reveal-info");
        } else {
            document
                .querySelector(".portfolio-info")
                .classList.remove("reveal-info");
        }
    });

    return (
        <div className="portfolio-container" id="section3">
            <h3 className="portfolio-info">Projects</h3>
            <div className="portfolio-grid-container">
                <Project />
            </div>
        </div>
    );
}

export default Projects;
