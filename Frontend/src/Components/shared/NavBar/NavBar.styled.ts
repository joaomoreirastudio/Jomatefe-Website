import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const NavbarSection = styled.div`
    z-index: 1;
    background-color: white;
    height: 5rem;
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        height: 6rem;
    }
`;

export const NavbarContainer = styled.div`
    ${flex("center", "space-between")}
    height:100%;
    gap: 3rem;

    width: 100%;

    @media screen and (min-width: 768px) {
        height: 100%;
        width: 80%;
        margin: 0 auto;
        max-width: 110rem;
        box-sizing: border-box;
    }
`;

export const NavbarMenu = styled.div`
    ${flex("center", "space-between")};
    flex-direction: column;
    position: absolute;
    height: 20rem;
    position: relative;
    z-index: 2;

    @media screen and (min-width: 768px) {
        gap: 1rem;
        color: black;
        z-index: 0;
    }
`;

export const NavbarMenuDesktop = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        font-size: 1rem;
    }
`;

export const NavBarLogo = styled.div`
    max-width: 100%;
    width: 9rem;
    padding-left: 1rem;

    @media screen and (min-width: 768px) {
        max-width: 100%;
        width: 11rem;
        display: block;
        padding: 0;
    }
`;

export const NavBarLogoImg = styled.img`
    max-width: 100%;
    height: auto;
    vertical-align: middle;
`;

export const NavBarListContainer = styled.ul`
    ${flex("center", "center")};
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    background-color: white;

    @media screen and (min-width: 768px) {
        ${flex("center", "space-between")};
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        font-size: 1rem;
    }
`;

export const NavBarList = styled.li`
    ${flex("center", "space-between")};
    font-size: 1rem;
    position: relative;
    color: #512700;
    font-weight: 400;
    border: none;
    background: transparent;

    &:first-child {
        margin-top: 2rem;
    }
    &:last-child {
        margin-bottom: 2rem;
    }

    &.active {
        color: black;
        font-weight: 700;
    }

    @media screen and (min-width: 768px) {
        padding-bottom: 5px;
        transition: color 0.3s ease-in-out;
        overflow: hidden;
        font-size: 1rem; /* Garante que a animação fique dentro do elemento */

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%; /* Mantemos a largura total */
            height: 2px;
            background-color: #512700;
            transform: scaleX(0); /* Começa completamente invisível */
            transform-origin: left;
            opacity: 0; /* Garante que não aparece até ser ativado */
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        &:hover {
            cursor: pointer;
        }

        &.active::after {
            transform: scaleX(1);
            opacity: 1; /* Torna a borda visível gradualmente */
        }
        &:hover::after {
            transform: scaleX(1);
            opacity: 1;
        }
        &:first-child {
            margin-top: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
`;
export const HamburgerContainer = styled.div`
    display: block;
    position: absolute;
    right: 1rem;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const LineDivider = styled.span`
    display: block;
    width: 100%;
    height: 0.1rem;
    background-color: #512700;
    opacity: 0.1;
`;
