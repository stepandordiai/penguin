import "./Contact.scss";

function Contact() {
    function wrongEmail() {
        let inp = document.getElementById("email");

        if (inp.value.includes("@")) {
            inp.style.background = " rgba(0, 255, 0, 0.5)";
        } else if (!inp.value) {
            inp.style.background = "var(--glass-background)";
        } else {
            inp.style.background = "rgba(255, 0, 0, 0.5)";
        }
    }

    function resetForm() {
        let inp = document.getElementById("email");
        inp.style.background = "var(--glass-background)";
    }

    addEventListener("scroll", () => {
        if (
            document.querySelector(".contact-info").getBoundingClientRect()
                .top < window.innerHeight
        ) {
            document
                .querySelector(".contact-info")
                .classList.add("reveal-info");
        } else {
            document
                .querySelector(".contact-info")
                .classList.remove("reveal-info");
        }
    });

    return (
        <div className="form-container section" id="section4">
            <h3 className="contact-info">Contact me</h3>
            <div className="form-choice-container">
                <form
                    className="form"
                    action="mailto:hokageow@icloud.com"
                    method="post"
                    encType="text/plain"
                >
                    <input
                        className="input-info"
                        type="text"
                        id="first-name"
                        name="First Name"
                        placeholder="First Name"
                    />
                    <input
                        className="input-info"
                        type="text"
                        id="last-name"
                        name="Last Name"
                        placeholder="Last Name"
                    />
                    <input
                        className="input-info"
                        type="email"
                        id="email"
                        name="Email"
                        placeholder="Email *"
                        onInput={() => wrongEmail()}
                    />
                    <input
                        className="input-info"
                        type="tel"
                        id="phone-number"
                        name="Phone Number"
                        placeholder="Phone Number"
                    />
                    <input
                        type="text"
                        className="input-subject-info"
                        id="subject"
                        name="Subject"
                        placeholder="Subject"
                    />
                    <textarea
                        className="input-message-info"
                        name="Message"
                        id="message"
                        placeholder="Message"
                        minLength="10"
                        rows="5"
                    ></textarea>
                    <div className="input-btn-container">
                        <input
                            onClick={resetForm}
                            className="form-reset-btn"
                            type="reset"
                            value="Reset"
                        />
                        <input
                            className="form-submit-btn"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>
                <p className="or">or</p>
                <form
                    className="extra-form"
                    action="mailto:stepandordiai@gmail.com"
                >
                    <label htmlFor="extra-mail">email me directly at</label>
                    <br />
                    <input
                        id="extra-mail"
                        className="extra-input"
                        type="submit"
                        value="stepandordiai@gmail.com"
                    />
                </form>
            </div>
        </div>
    );
}

export default Contact;
