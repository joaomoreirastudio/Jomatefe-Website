import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const NavbarSection = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;
    height: 5rem;
    padding-top: 0.5rem;

    @media screen and (min-width: 768px) {
        height: 7rem;
    }
`;

export const NavbarContainer = styled.div`
    ${flex("center", "space-between")}
    height: 1rem;
    padding: 2rem 1rem 1rem 1rem;

    @media screen and (min-width: 768px) {
        padding: 3rem 10rem 0 8rem;
    }
`;

export const NavbarMenu = styled.div`
    ${flex("center", "space-between")};
    flex-direction: column;

    background-color: white;

    @media screen and (min-width: 768px) {
        gap: 1rem;
        color: black;
        background-color: white;
    }
`;

export const NavbarMenuDesktop = styled.div`
    display: none;
    font-size: 16px;
    @media screen and (min-width: 768px) {
        display: block;
    }
`;

export const NavBarLogo = styled.div`
    width: 11rem;
    padding: 0 0.5rem 0 0 0.5rem;

    @media screen and (min-width: 768px) {
        width: 15rem;
    }
`;

export const NavBarLogoImg = styled.img`
    width: 100%;
`;

export const NavBarListContainer = styled.ul`
    ${flex("center", "center")};
    flex-direction: column;
    gap: 2rem;
    width: 80%;

    @media screen and (min-width: 768px) {
        ${flex("center", "space-between")};
        flex-direction: row;
        gap: 3rem;
        width: 100%;
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
        overflow: hidden; /* Garante que a animação fique dentro do elemento */

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

        &.active::after {
            transform: scaleX(1);
            opacity: 1; /* Torna a borda visível gradualmente */
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
    right: 0.5rem;

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
