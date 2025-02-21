import "./ToTopBtn.scss";

function ToTopBtn() {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    let scrollPercentage = () => {
        let myBtn = document.querySelector("#progress");
        let progressValue = document.getElementById("progress-value");
        let arrowUp = document.getElementById("arrow-up");
        let pos = document.documentElement.scrollTop;
        const calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        progressValue.textContent = scrollValue + "%";
        progressValue.style.animation = "opacUp forwards";
        arrowUp.style.animation = "opacDown forwards";
        if (
            document.body.scrollTop > 1 ||
            document.documentElement.scrollTop > 1
        ) {
            myBtn.style.display = "flex";
            myBtn.style.animation = "toTopButton 0.3s forwards";
        } else {
            myBtn.style.animation = "toDownButton 0.3s forwards";
        }
    };

    addEventListener("scrollend", () => {
        let progressValue = document.getElementById("progress-value");
        let arrowUp = document.getElementById("arrow-up");
        progressValue.style.animation = "opacDown 0.5s forwards";
        arrowUp.style.animation = "opacUp 0.5s forwards";
    });
    addEventListener("touchend", () => {
        let progressValue = document.getElementById("progress-value");
        let arrowUp = document.getElementById("arrow-up");
        progressValue.style.animation = "opacDown 0.5s forwards";
        arrowUp.style.animation = "opacUp 0.5s forwards";
    });

    window.onscroll = scrollPercentage;

    return (
        <>
            <button id="progress" onClick={topFunction}>
                <i id="arrow-up" className="fa-solid fa-arrow-up"></i>
                <span id="progress-value"></span>
            </button>
        </>
    );
}

export default ToTopBtn;
