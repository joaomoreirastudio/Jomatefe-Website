import {
    NavbarSection,
    NavbarContainer,
    NavbarMenu,
    NavBarLogo,
    NavBarLogoImg,
    NavBarListContainer,
    NavBarList,
    HamburgerContainer,
    NavbarMenuDesktop,
    LineDivider,
} from "./NavBar.styled.js";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "../../../assets/logo-navbar.svg";
// import { FaChevronDown } from "react-icons/fa6";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Obtém a URL atual
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
        setMenuOpen(false); // Fecha o menu quando a página muda
    }, [location.pathname]);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };
    const handleHomeClick = () => {
        navigate("/");
        setActiveTab("/");
    };

    const handleAboutUsClick = () => {
        navigate("/about-us");
        setActiveTab("/about-us");
    };

    const handleProjectsClick = () => {
        navigate("/Projects");
        setActiveTab("/Projects");
    };

    const handleContactsClick = () => {
        navigate("/Contacts");
        setActiveTab("/Contacts");
    };

    return (
        <>
            <NavbarSection>
                <NavbarContainer>
                    <NavBarLogo onClick={handleHomeClick}>
                        <NavBarLogoImg src={Logo} />
                    </NavBarLogo>

                    <NavbarMenuDesktop>
                        <NavBarListContainer>
                            <NavBarList
                                onClick={handleHomeClick}
                                className={activeTab === "/" ? "active" : ""}
                            >
                                Home
                            </NavBarList>
                            <NavBarList
                                onClick={handleAboutUsClick}
                                className={
                                    activeTab === "/about-us" ? "active" : ""
                                }
                            >
                                Sobre nós
                            </NavBarList>
                            <NavBarList
                                onClick={handleProjectsClick}
                                className={
                                    activeTab === "/Projects" ? "active" : ""
                                }
                            >
                                Projetos
                            </NavBarList>
                            <NavBarList
                                onClick={handleContactsClick}
                                className={
                                    activeTab === "/Contacts" ? "active" : ""
                                }
                            >
                                Contactos
                            </NavBarList>
                        </NavBarListContainer>
                    </NavbarMenuDesktop>
                    <HamburgerContainer>
                        <Hamburger
                            toggled={menuOpen}
                            toggle={handleHamburgerClick}
                        />
                    </HamburgerContainer>
                </NavbarContainer>
                <NavbarMenu>
                    {menuOpen && (
                        <NavBarListContainer>
                            <NavBarList
                                onClick={handleHomeClick}
                                className={activeTab === "/" ? "active" : ""}
                            >
                                Home
                            </NavBarList>
                            <LineDivider />
                            <NavBarList
                                onClick={handleAboutUsClick}
                                className={
                                    activeTab === "/about-us" ? "active" : ""
                                }
                            >
                                Sobre nós
                            </NavBarList>
                            <LineDivider />
                            <NavBarList
                                onClick={handleProjectsClick}
                                className={
                                    activeTab === "/Projects" ? "active" : ""
                                }
                            >
                                Projetos
                            </NavBarList>
                            <LineDivider />
                            <NavBarList
                                onClick={handleContactsClick}
                                className={
                                    activeTab === "/Contacts" ? "active" : ""
                                }
                            >
                                Contactos
                            </NavBarList>
                        </NavBarListContainer>
                    )}
                </NavbarMenu>
            </NavbarSection>
        </>
    );
};

export default NavBar;
