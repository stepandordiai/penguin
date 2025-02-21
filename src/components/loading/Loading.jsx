import { useEffect } from "react";
import loadingLogo from "./../../assets/logo/penguin-black.png";
import "./Loading.scss";

function Loading() {
    useEffect(() => {
        setLoading();

        setTimeout(() => {
            document.body.style.position = "initial";
            document.body.style.overflowY = "visible";
            document.querySelector(".loading-container").style.display = "none";
        }, 4000);
    }, []);

    function setLoading(percent = 100) {
        let width = 0;
        let id = setInterval(closure, 10);
        function closure() {
            if (width === percent) {
                clearInterval(id);
            } else {
                width++;
                document.querySelector(".percent-number").innerHTML =
                    width + "%";
                document.querySelector(".percent-range").style.width =
                    width + "%";
                document.querySelector(
                    ".loading-name-logo"
                ).style.background = `linear-gradient(90deg, var(--color) ${width}%, var(--glass-background) 0%)`;
            }
        }
    }

    return (
        <div className="loading-container">
            <p className="loading-name-logo">penguin</p>
            <div className="loading-img-logo-container">
                <img
                    className="loading-img-logo js-logo"
                    src={loadingLogo}
                    alt="heeeyooo"
                />
            </div>
            <div className="loading-percent-container">
                <p className="loading-percent">
                    Loading <span className="percent-number">0%</span>
                </p>
                <div className="percent-range-background">
                    <span className="percent-range"></span>
                </div>
            </div>
        </div>
    );
}

export default Loading;
