import styled from "styled-components";

export const ProductIMGContainer = styled.div`
    display: flex;
    justify-content: center; /* Centraliza o grupo de imagens */
    align-items: center;
    width: 100%;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        gap: 20px;
        max-width: 80%;
        margin: auto;
    }
`;

export const ProductIMG = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Mantém alinhadas à esquerda */
    justify-content: flex-start; /* Alinha as imagens à esquerda dentro do grupo */
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    gap: 1rem; /* Adiciona espaçamento entre as imagens */

    img {
        width: calc(100% / 2 - 10px); /* Em telas menores, usa 2 colunas */
        aspect-ratio: 1/1;
        height: auto;
        object-fit: cover;
        overflow: hidden;
    }

    @media screen and (min-width: 768px) {
        gap: 1.5rem;
        img {
            width: calc(100% / 3 - 1.5rem);
            aspect-ratio: 4/3;
        }
    }
`;

export const ModalImage = styled.img`
    width: auto;
    max-width: 70vw;
    max-height: 80vh;
    aspect-ratio: 4 / 3;
    object-fit: contain;

    @media screen and (max-width: 767px) {
        max-width: 90vw;
        max-height: 85vh;
    }
`;

export const CategoriesMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 6rem 0 2rem 0;
    width: 100%;

    button {
        position: relative;
        color: #512700;
        font-weight: 500;
        border: none;
        background: transparent;
        padding-bottom: 5px;
        transition: color 0.3s ease-in-out;
        overflow: hidden;
        font-size: 0.9rem;
    }

    /* Adiciona um pseudo-elemento para criar a borda animada */
    button::after {
        content: "";
        position: absolute;
        left: 20%;
        bottom: 0;
        width: 60%; /* Mantemos a largura total */
        height: 2px;
        background-color: #512700;
        transform: scaleX(0); /* Começa completamente invisível */
        transform-origin: left;
        opacity: 0; /* Garante que não aparece até ser ativado */
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    /* Expande a borda ao ativar */
    button.active::after {
        transform: scaleX(1);
        opacity: 1; /* Torna a borda visível gradualmente */
    }

    @media screen and (min-width: 768px) {
        padding: 6rem 0 3rem 0;
        gap: 5rem;
        button {
            font-size: 1rem;
        }
    }
`;
