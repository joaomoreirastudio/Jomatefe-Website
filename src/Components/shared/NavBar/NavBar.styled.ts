import styled from "styled-components";
const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const NavbarContainer = styled.div`
    ${flex("center", "space-between")}
    height: 1rem;
    padding: 3rem 3rem 0 2rem;
`;

export const NavbarMenu = styled.div`
    ${flex("center", "space-between")};
    flex-direction: column;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
        gap: 1rem;
        color: black;
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
    width: 4rem;
    padding: 1rem;
`;

export const NavBarLogoImg = styled.img`
    width: 100%;
`;

export const NavBarList = styled.li`
    ${flex("center", "space-between")};
    font-size: 1rem;
    @media screen and (min-width: 768px) {
    }
`;

export const NavBarListContainer = styled.ul`
    ${flex("center", "center")};
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        ${flex("center", "space-between")};
        flex-direction: row;
        gap: 1rem;
    }
`;

export const HamburgerContainer = styled.div`
    display: block; // Garante que esteja visível por padrão
    position: absolute; // Posiciona o container de forma absoluta
    right: 0.5rem;

    @media screen and (min-width: 768px) {
        display: none; // Esconde o container em telas maiores que 768px
    }
`;
