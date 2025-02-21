import { useEffect } from "react";
import logoWhite from "./../../assets/logo/penguin-white.png";
import "./DayNight.scss";

function DayNight() {
    useEffect(() => {
        changeBackground();
    }, []);

    function changeBackground() {
        const loadingBackground = document.querySelector(".loading-container");
        const bodyBackground = document.body;
        const variables = document.querySelector(":root");
        const logoImg = document.querySelectorAll(".js-logo");

        switch (new Date().getHours()) {
            case 0:
                loadingBackground.classList.add("h0");
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
                bodyBackground.classList.add("h0");
                break;
            case 1:
                loadingBackground.classList.add("h1");
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
                bodyBackground.classList.add("h1");
                break;
            case 2:
                loadingBackground.classList.add("h2");
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
                bodyBackground.classList.add("h2");
                break;
            case 3:
                loadingBackground.classList.add("h3");
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
                bodyBackground.classList.add("h3");
                break;
            case 4:
                loadingBackground.classList.add("h4");
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
                bodyBackground.classList.add("h4");
                break;
            case 5:
                loadingBackground.classList.add("h5");
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
                bodyBackground.classList.add("h5");
                break;
            case 6:
                loadingBackground.classList.add("h6");
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
                bodyBackground.classList.add("h6");
                break;
            case 7:
                loadingBackground.classList.add("h7");
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
                bodyBackground.classList.add("h7");
                break;
            case 8:
                loadingBackground.classList.add("h8");
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
                bodyBackground.classList.add("h18");
                break;
            case 19:
                loadingBackground.classList.add("h19");
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
                bodyBackground.classList.add("h0");
                break;
            case 20:
                loadingBackground.classList.add("h20");

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
                bodyBackground.classList.add("h20");
                break;
            case 21:
                loadingBackground.classList.add("h21");
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
                bodyBackground.classList.add("h21");
                break;
            case 22:
                loadingBackground.classList.add("h22");
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
                bodyBackground.classList.add("h22");
                break;
            case 23:
                loadingBackground.classList.add("h23");
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
                bodyBackground.classList.add("h23");
        }
    }

    return <></>;
}

export default DayNight;
