import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage.tsx";
import "./App.css";
import AboutUs from "./Pages/AboutUs.tsx";
import Projects from "./Pages/Projects.tsx";
import Contacts from "./Pages/Contacts.tsx";
import NavBar from "./Components/shared/NavBar/NavBar.tsx";
import Footer from "./Components/shared/Footer/Footer.tsx";
import ScrollToTop from "./Components/ScrollToTop.tsx";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Contacts" element={<Contacts />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
