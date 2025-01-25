import {
    NavbarContainer,
    NavbarMenu,
    NavBarLogo,
    NavBarLogoImg,
    NavBarListContainer,
    NavBarList,
    HamburgerContainer,
    NavbarMenuDesktop,
} from "./NavBar.styled.js";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "../../../assets/logo-navbar.svg";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };
    const handleSeatingClick = () => {
        navigate("/SeatingProductsPage");
    };
    const handleHomeClick = () => {
        navigate("/");
    };
    return (
        <>
            <NavbarContainer>
                <NavBarLogo onClick={handleHomeClick}>
                    <NavBarLogoImg src={Logo} />
                </NavBarLogo>
                <NavbarMenuDesktop>
                    <NavBarListContainer>
                        <NavBarList onClick={handleSeatingClick}>
                            Home
                        </NavBarList>
                        <NavBarList>Sobre nós</NavBarList>
                        <NavBarList>Projetos</NavBarList>
                        <NavBarList>Contactos</NavBarList>
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
                        <NavBarList onClick={handleSeatingClick}>
                            Seating
                        </NavBarList>
                        <NavBarList>Living Room</NavBarList>
                        <NavBarList>Outdoor</NavBarList>
                        <NavBarList>Bedroom</NavBarList>
                        <NavBarList>Storage</NavBarList>
                    </NavBarListContainer>
                )}
            </NavbarMenu>
        </>
    );
};

export default NavBar;
