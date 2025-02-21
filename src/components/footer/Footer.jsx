import { useEffect } from "react";
import logoBlack from "./../../assets/logo/penguin-black.png";
import logoWhite from "./../../assets/logo/penguin-white.png";
import "./Footer.scss";

function Footer() {
    useEffect(() => {
        setInterval(() => {
            const changeText = document.getElementById("js-quote");
            if (changeText.textContent === "effectively") {
                changeText.textContent = "wisely";
            } else if (changeText.textContent === "wisely") {
                changeText.textContent = "correctly";
            } else {
                changeText.textContent = "effectively";
            }
        }, 2000);
    }, []);

    const BLACK = {
        color: "#000",
        linkColor: "rgba(0, 0, 0, 0.5)",
        projectBackground: "rgba(255, 255, 255, 0.5)",
        icon: logoBlack,
        glassBackground: "rgba(255, 255, 255, 0.5)",
    };

    const WHITE = {
        color: "#fff",
        linkColor: "rgba(255, 255, 255, 0.5)",
        projectBackground: "rgba(0, 0, 0, 0.5)",
        icon: logoWhite,
        glassBackground: "rgba(0, 0, 0, 0.5)",
    };

    function forceChangeColor(props) {
        const myLogo = document.querySelectorAll(".js-logo");
        const styles = document.querySelector(":root");
        myLogo.forEach((elem) => {
            elem.src = props.icon;
        });
        styles.style.setProperty("--color", props.color);
        styles.style.setProperty("--semi-transparent-color", props.linkColor);
        styles.style.setProperty(
            "--project-background",
            props.projectBackground
        );
        styles.style.setProperty("--glass-background", props.glassBackground);
    }

    function changeBackground() {
        const loadingBackground = document.querySelector(".loading-container");
        const bodyBackground = document.body;

        switch (new Date().getHours()) {
            case 0:
                loadingBackground.classList.add("h0");
                bodyBackground.classList.add("h0");
                break;
            case 1:
                loadingBackground.classList.add("h1");
                bodyBackground.classList.add("h1");
                break;
            case 2:
                loadingBackground.classList.add("h2");
                bodyBackground.classList.add("h2");
                break;
            case 3:
                loadingBackground.classList.add("h3");
                bodyBackground.classList.add("h3");
                break;
            case 4:
                loadingBackground.classList.add("h4");
                bodyBackground.classList.add("h4");
                break;
            case 5:
                loadingBackground.classList.add("h5");
                bodyBackground.classList.add("h5");
                break;
            case 6:
                loadingBackground.classList.add("h6");
                bodyBackground.classList.add("h6");
                break;
            case 7:
                loadingBackground.classList.add("h7");
                bodyBackground.classList.add("h7");
                break;
            case 8:
                loadingBackground.classList.add("h8");
                bodyBackground.classList.add("h8");
                break;
            case 9:
                loadingBackground.classList.add("h9");
                bodyBackground.classList.add("h9");
                break;
            case 10:
                loadingBackground.classList.add("h10");
                bodyBackground.classList.add("h10");
                break;
            case 11:
                loadingBackground.classList.add("h11");
                bodyBackground.classList.add("h11");
                break;
            case 12:
                loadingBackground.classList.add("h12");
                bodyBackground.classList.add("h12");
                break;
            case 13:
                loadingBackground.classList.add("h13");
                bodyBackground.classList.add("h13");
                break;
            case 14:
                loadingBackground.classList.add("h14");
                bodyBackground.classList.add("h14");
                break;
            case 15:
                loadingBackground.classList.add("h15");
                bodyBackground.classList.add("h15");
                break;
            case 16:
                loadingBackground.classList.add("h16");
                bodyBackground.classList.add("h16");
                break;
            case 17:
                loadingBackground.classList.add("h17");
                bodyBackground.classList.add("h17");
                break;
            case 18:
                loadingBackground.classList.add("h18");
                bodyBackground.classList.add("h18");
                break;
            case 19:
                loadingBackground.classList.add("h19");
                bodyBackground.classList.add("h0");
                break;
            case 20:
                loadingBackground.classList.add("h20");
                bodyBackground.classList.add("h20");
                break;
            case 21:
                loadingBackground.classList.add("h21");
                bodyBackground.classList.add("h21");
                break;
            case 22:
                loadingBackground.classList.add("h22");
                bodyBackground.classList.add("h22");
                break;
            case 23:
                loadingBackground.classList.add("h23");
                bodyBackground.classList.add("h23");
        }
    }

    function changeColor() {
        const variables = document.querySelector(":root");
        const logoImg = document.querySelectorAll(".js-logo");

        switch (new Date().getHours()) {
            case 0:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 1:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 2:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 3:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 4:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 5:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 6:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 7:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 8:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 9:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 10:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 11:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 12:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 13:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 14:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 15:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 16:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 17:
                logoImg.forEach((elem) => {
                    elem.src = logoBlack;
                });
                variables.style.setProperty("--color", "#000");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(255, 255, 255, 0.5)"
                );
                break;
            case 18:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 19:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 20:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 21:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 22:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                break;
            case 23:
                logoImg.forEach((elem) => {
                    elem.src = logoWhite;
                });
                variables.style.setProperty("--color", "#fff");
                variables.style.setProperty(
                    "--glass-background",
                    "rgba(0, 0, 0, 0.5)"
                );
                variables.style.setProperty(
                    "--semi-transparent-color",
                    "rgba(255, 255, 255, 0.5)"
                );
                variables.style.setProperty(
                    "--project-background",
                    "rgba(0, 0, 0, 0.5)"
                );
        }
    }

    function setPicker() {
        const btnSection = document.querySelector(".input-section");
        if (btnSection.scrollTop === 0) {
            document
                .querySelector(".auto")
                .classList.add("active-picker-btn-auto");
            document.body.className = "";
            changeBackground();
        } else if (btnSection.scrollTop === 40) {
            document.querySelector(".btn0").classList.add("active-picker-btn");
            document.body.className = "h0";
        } else if (btnSection.scrollTop === 80) {
            document.querySelector(".btn1").classList.add("active-picker-btn");
            document.body.className = "h1";
        } else if (btnSection.scrollTop === 120) {
            document.querySelector(".btn2").classList.add("active-picker-btn");
            document.body.className = "h2";
        } else if (btnSection.scrollTop === 160) {
            document.querySelector(".btn3").classList.add("active-picker-btn");
            document.body.className = "h3";
        } else if (btnSection.scrollTop === 200) {
            document.querySelector(".btn4").classList.add("active-picker-btn");
            document.body.className = "h4";
        } else if (btnSection.scrollTop === 240) {
            document.querySelector(".btn5").classList.add("active-picker-btn");
            document.body.className = "h5";
        } else if (btnSection.scrollTop === 280) {
            document.querySelector(".btn6").classList.add("active-picker-btn");
            document.body.className = "h6";
        } else if (btnSection.scrollTop === 320) {
            document.querySelector(".btn7").classList.add("active-picker-btn");
            document.body.className = "h7";
        } else if (btnSection.scrollTop === 360) {
            document.querySelector(".btn8").classList.add("active-picker-btn");
            document.body.className = "h8";
        } else if (btnSection.scrollTop === 400) {
            document.querySelector(".btn9").classList.add("active-picker-btn");
            document.body.className = "h9";
        } else if (btnSection.scrollTop === 440) {
            document.querySelector(".btn10").classList.add("active-picker-btn");
            document.body.className = "h10";
        } else if (btnSection.scrollTop === 480) {
            document.querySelector(".btn11").classList.add("active-picker-btn");
            document.body.className = "h11";
        } else if (btnSection.scrollTop === 520) {
            document.querySelector(".btn12").classList.add("active-picker-btn");
            document.body.className = "h12";
        } else if (btnSection.scrollTop === 560) {
            document.querySelector(".btn13").classList.add("active-picker-btn");
            document.body.className = "h13";
        } else if (btnSection.scrollTop === 600) {
            document.querySelector(".btn14").classList.add("active-picker-btn");
            document.body.className = "h14";
        } else if (btnSection.scrollTop === 640) {
            document.querySelector(".btn15").classList.add("active-picker-btn");
            document.body.className = "h15";
        } else if (btnSection.scrollTop === 680) {
            document.querySelector(".btn16").classList.add("active-picker-btn");
            document.body.className = "h16";
        } else if (btnSection.scrollTop === 720) {
            document.querySelector(".btn17").classList.add("active-picker-btn");
            document.body.className = "h17";
        } else if (btnSection.scrollTop === 760) {
            document.querySelector(".btn18").classList.add("active-picker-btn");
            document.body.className = "h18";
        } else if (btnSection.scrollTop === 800) {
            document.querySelector(".btn19").classList.add("active-picker-btn");
            document.body.className = "h19";
        } else if (btnSection.scrollTop === 840) {
            document.querySelector(".btn20").classList.add("active-picker-btn");
            document.body.className = "h20";
        } else if (btnSection.scrollTop === 880) {
            document.querySelector(".btn21").classList.add("active-picker-btn");
            document.body.className = "h21";
        } else if (btnSection.scrollTop === 920) {
            document.querySelector(".btn22").classList.add("active-picker-btn");
            document.body.className = "h22";
        } else if (btnSection.scrollTop === 960) {
            document.querySelector(".btn23").classList.add("active-picker-btn");
            document.body.className = "h23";
        } else {
            document.querySelectorAll(".picker-btn").forEach((el) => {
                el.classList.remove("active-picker-btn");
                el.classList.remove("active-picker-btn-auto");
            });
        }
    }

    function setPickerColor() {
        const btnSectionColor = document.querySelector(".input-section-color");
        if (btnSectionColor.scrollTop === 0) {
            document
                .querySelector(".auto-color")
                .classList.add("active-picker-btn-text-auto");
            changeColor();
        } else if (btnSectionColor.scrollTop === 40) {
            document
                .querySelector(".btn-color0")
                .classList.add("active-picker-btn-text-auto");
            forceChangeColor(BLACK);
        } else if (btnSectionColor.scrollTop === 80) {
            document
                .querySelector(".btn-color1")
                .classList.add("active-picker-btn-text-auto");
            forceChangeColor(WHITE);
        } else {
            document.querySelectorAll(".picker-btn").forEach((el) => {
                el.classList.remove("active-picker-btn-text-auto");
            });
        }
    }

    return (
        <footer className="footer js-footer">
            <a className="link-logo-footer" href="#section1">
                <img
                    className="logo-footer js-logo"
                    src={logoBlack}
                    alt="heeeyooo"
                />
            </a>
            <q className="main-quote">
                Time is the most precious asset in this world, use it
                <span className="only-word" id="js-quote">
                    effectively
                </span>
            </q>
            <div className="scroll-pick">
                <div className="container">
                    <div className="picker-glass"></div>
                    <div className="input-section" onScroll={() => setPicker()}>
                        <button className="picker-btn auto active-picker-btn-auto">
                            auto
                        </button>
                        <button className="picker-btn btn0">0</button>
                        <button className="picker-btn btn1">1</button>
                        <button className="picker-btn btn2">2</button>
                        <button className="picker-btn btn3">3</button>
                        <button className="picker-btn btn4">4</button>
                        <button className="picker-btn btn5">5</button>
                        <button className="picker-btn btn6">6</button>
                        <button className="picker-btn btn7">7</button>
                        <button className="picker-btn btn8">8</button>
                        <button className="picker-btn btn9">9</button>
                        <button className="picker-btn btn10">10</button>
                        <button className="picker-btn btn11">11</button>
                        <button className="picker-btn btn12">12</button>
                        <button className="picker-btn btn13">13</button>
                        <button className="picker-btn btn14">14</button>
                        <button className="picker-btn btn15">15</button>
                        <button className="picker-btn btn16">16</button>
                        <button className="picker-btn btn17">17</button>
                        <button className="picker-btn btn18">18</button>
                        <button className="picker-btn btn19">19</button>
                        <button className="picker-btn btn20">20</button>
                        <button className="picker-btn btn21">21</button>
                        <button className="picker-btn btn22">22</button>
                        <button className="picker-btn btn23">23</button>
                    </div>
                </div>
                <div className="container2">
                    <div className="picker-glass"></div>
                    <div
                        className="input-section-color"
                        onScroll={() => setPickerColor()}
                    >
                        <button className="picker-btn auto-color active-picker-btn-text-auto">
                            auto
                        </button>
                        <button className="picker-btn btn-color0">black</button>
                        <button
                            className="picker-btn btn-color1"
                            onClick={() => forceChangeColor(WHITE)}
                        >
                            white
                        </button>
                    </div>
                </div>
            </div>
            <div className="info-icon">
                <a
                    className="icon-color"
                    href="https://github.com/stepandordiai"
                    target="_blank"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    className="icon-color"
                    href="https://www.instagram.com/heeeyooo_/"
                    target="_blank"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                    className="icon-color"
                    href="https://x.com/Heeeyooo_"
                    target="_blank"
                >
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                    className="icon-color"
                    href="https://www.twitch.tv/heeeyooo_"
                    target="_blank"
                >
                    <i className="fa-brands fa-twitch"></i>
                </a>
                <a
                    className="icon-color"
                    href="https://www.linkedin.com/in/stepan-dordiai"
                    target="_blank"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <p className="copyright">
                © penguin 2023 - {new Date().getFullYear()} | Made with love by{" "}
                <a
                    className="creator"
                    href="https://stepandordiai.netlify.app/"
                >
                    Stepan Dordiai
                </a>
            </p>
        </footer>
    );
}

export default Footer;
