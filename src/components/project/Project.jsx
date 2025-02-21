import "./Project.scss";

function Project() {
    const DATA = [
        {
            id: 1,
            link: "#",
            gitHubLink: "#",
            title: "01",
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project1-container",
            classImg: "img-title",
        },
        {
            id: 2,
            link: "#",
            gitHubLink: "#",
            title: "02",
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
                <i className="fa-brands fa-sass"></i>,
            ],
            class: "project2-container",
            classImg: "img-title",
        },
        {
            id: 3,
            link: "#",
            gitHubLink: "#",
            title: "03",
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project3-container",
            classImg: "img-title-full",
        },
        {
            id: 4,
            link: "#",
            gitHubLink: "#",
            title: "04",
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project4-container",
            classImg: "img-title",
        },
        {
            id: 5,
            link: "#",
            gitHubLink: "#",
            title: "05",
            skills: [
                <i className="fa-brands fa-html5"></i>,
                <i className="fa-brands fa-css3-alt"></i>,
                <i className="fa-brands fa-square-js"></i>,
            ],
            class: "project5-container",
            classImg: "img-title-full",
        },
    ];

    return (
        <>
            {DATA.map((el) => {
                return (
                    <div className={el.class} key={el.id}>
                        <div className="project-content-container">
                            <h4 className="project-name">{el.title}</h4>
                            <p className="project-info"></p>
                            <div className="link-project-container">
                                <a href={el.link} target="_blank">
                                    demo <i className="fa-solid fa-link"></i>
                                </a>
                                <a href={el.gitHubLink} target="_blank">
                                    github <i className="fa-solid fa-link"></i>
                                </a>
                            </div>
                            <div className="project-skills">
                                {el.skills.map((skill, index) => {
                                    return <div key={index}>{skill}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Project;
