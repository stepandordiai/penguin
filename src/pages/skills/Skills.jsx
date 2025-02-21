import "./Skills.scss";

function Skills() {
    function animateSkill(index, percent, color) {
        let width = 0;
        let customSkillInterval = setInterval(innerClosure, 10);
        function innerClosure() {
            const skillRanges = document.querySelectorAll(".js-range");
            const skillNumbers = document.querySelectorAll(".js-percentage");

            if (width >= percent) {
                clearInterval(customSkillInterval);
            } else {
                width++;
                skillRanges[index].style.width = width + "%";
                skillRanges[index].style.backgroundColor = color;
                skillNumbers[index].style.display = "block";
                skillNumbers[index].innerHTML = width * 1 + "%";
            }
        }
    }

    addEventListener("scroll", () => {
        if (
            document.querySelector(".skills-info").getBoundingClientRect().top <
            window.innerHeight
        ) {
            document
                .querySelector(".skills-info")
                .classList.add("reveal-info0");
        } else {
            document
                .querySelector(".skills-info")
                .classList.remove("reveal-info0");
        }
    });

    addEventListener("scroll", () => {
        if (
            document
                .querySelector(".reveal-skill-wrapper")
                .getBoundingClientRect().top < window.innerHeight
        ) {
            document.querySelector(".skill1").classList.add("reveal-info1");
            document.querySelector(".skill2").classList.add("reveal-info2");
            document.querySelector(".skill3").classList.add("reveal-info3");
            document.querySelector(".skill4").classList.add("reveal-info4");
            document.querySelector(".skill5").classList.add("reveal-info5");
            document.querySelector(".skill6").classList.add("reveal-info6");
            document.querySelector(".skill7").classList.add("reveal-info7");
            document.querySelector(".skill8").classList.add("reveal-info8");
            document.querySelector(".skill9").classList.add("reveal-info9");
        } else {
            document.querySelector(".skill1").classList.remove("reveal-info1");
            document.querySelector(".skill2").classList.remove("reveal-info2");
            document.querySelector(".skill3").classList.remove("reveal-info3");
            document.querySelector(".skill4").classList.remove("reveal-info4");
            document.querySelector(".skill5").classList.remove("reveal-info5");
            document.querySelector(".skill6").classList.remove("reveal-info6");
            document.querySelector(".skill7").classList.remove("reveal-info7");
            document.querySelector(".skill8").classList.remove("reveal-info8");
            document.querySelector(".skill9").classList.remove("reveal-info9");
        }
    });

    return (
        <div className="skills-container section" id="section2">
            <h3 className="skills-info">Skills</h3>
            <div className="reveal-skill-wrapper">
                <div className="skills-grid-container">
                    <div className="icon-container skill1 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(0, 75, "green")}
                            className="fa-brands fa-python skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                    <div className="icon-container skill2 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(1, 96, "tomato")}
                            className="fa-brands fa-html5 skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                    <div className="icon-container skill3 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(2, 65, "skyblue")}
                            className="fa-brands fa-css3-alt skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                    <div className="icon-container skill4 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(3, 87, "gold")}
                            className="fa-brands fa-square-js skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                    <div className="icon-container skill5 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(4, 52, "orange")}
                            className="fa-brands fa-git-alt skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                    <div className="icon-container skill6 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(5, 52, "orange")}
                            className="fa-brands fa-github skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                    <div className="icon-container skill7 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(6, 87, "fuchsia")}
                            className="fa-brands fa-sass skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                    <div className="icon-container skill8 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(7, 75, "thistle")}
                            className="fa-brands fa-figma skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                </div>
                <h4 className="current-info">Currently learning</h4>
                <div className="current-grid">
                    <div className="icon-container-current skill9 js-skill">
                        <div className="skills-progress-container js-range"></div>
                        <i
                            onClick={() => animateSkill(8, 50, "turquoise")}
                            className="fa-brands fa-react skills-icon"
                        ></i>
                        <p className="skills-progress-percent js-percentage"></p>
                    </div>
                </div>
            </div>
            <p className="skills-progress-info">
                Click the icon to see my skill progress based on{" "}
                <img
                    width="30px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/150px-W3Schools_logo.svg.png"
                    alt="W3Schools_logo"
                />
            </p>
        </div>
    );
}

export default Skills;
