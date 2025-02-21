import "./BurgerBtn.scss";

function BurgerBtn() {
    function toggleBtn() {
        document
            .querySelector(".burger-button")
            .classList.toggle("active-burger-button");
        document.querySelector(".header").classList.toggle("active-header");
        document
            .querySelector(".header-nav")
            .classList.toggle("active-header-nav");
        document
            .querySelector(".header-socials")
            .classList.toggle("active-header-socials");
    }

    return <div onClick={toggleBtn} className="burger-button"></div>;
}

export default BurgerBtn;
