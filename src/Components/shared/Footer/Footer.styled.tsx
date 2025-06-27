import styled from "styled-components";
import BackgroundImg from "../../../assets/Images/wooden-texture.webp";
export const Footer = styled.footer`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-position: 25% 75%;
    height: 100%;
    padding: 2rem 0;

    .line--break {
        width: 90%;
        margin: 1rem auto;
        border: 1px solid #fff;
        max-width: 120rem;
    }
`;

export const FooterContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 80%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        max-width: 110rem;
    }
`;

export const FooterText = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    img {
        width: 6rem;
        padding-bottom: 2rem;
    }
    p {
        text-align: justify;
        width: 90%;
        margin: auto;
        font-size: 1rem;
        line-height: 1.25rem;
    }
    a {
        color: #fff;
        font-size: 1.1rem;
    }
    @media screen and (min-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 80%;

        div {
            width: 100%;
        }

        p {
            margin: 0;
            width: 70%;
            font-size: 1rem;
        }
    }
`;

export const FooterContacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: right;
    span {
        text-align: center;
        width: 100%;
        margin: auto;
        font-size: 1rem;
    }
    a {
        color: #fff;
        font-size: 1rem;
    }
    h3 {
        font-size: 1.25rem;
        text-align: center;
    }

    @media screen and (min-width: 768px) {
        span,
        a {
            text-align: right;
            font-size: 0.9rem;
        }
        h3 {
            font-size: 1.25rem;
        }
    }
`;

export const FooterDev = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    span {
        width: 100%;
        margin: auto;
        font-size: 1rem;
    }
    a {
        color: #fff;
        font-size: 1rem;
    }
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span,
        a {
            font-size: 0.75rem;
        }
    }
`;
