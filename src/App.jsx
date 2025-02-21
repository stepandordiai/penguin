import DayNight from "./components/dayNight/DayNight";
import Loading from "./components/loading/Loading";
import ToTopBtn from "./components/toTopBtn/ToTopBtn";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
    return (
        <>
            <DayNight />
            <ToTopBtn />
            <Loading />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
