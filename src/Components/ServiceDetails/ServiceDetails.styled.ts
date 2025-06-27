import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    height: 100%;
`;

export const ServiceDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 2rem;
    flex-grow: 1;
    position: relative;
    overflow: hidden;

    .background--img--container {
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        right: 50%;
        z-index: -1;

        .background--img {
            width: auto;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-grow: 1;
        flex-direction: row;
        height: 26rem;

        .background--img--container {
            width: 100%;
            height: 70%;
            right: 0;
            .background--img {
                width: 100%;
                object-position: top center;
            }
        }
    }
`;

export const ServiceDetailsModuleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 2rem;
    margin: 2rem auto;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-grow: 0;
        flex-direction: row;
        width: 90%;
        max-width: 100rem;
    }
`;

export const ServiceDetailsModule = styled.div`
    position: relative;
    top: 0;
    width: 90%;
    background-color: white;
    padding: 2rem 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    overflow: auto;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    height: 22rem;

    div {
        width: auto;
        height: 7rem;
    }
    img {
        height: 100%;
        max-height: 100%;
    }
    h2 {
        color: #512700;
        font-size: 1.5rem;
        padding: 1rem 0;
    }
    p {
        width: 70%;
        text-orientation: center;
        text-align: center;
        font-size: 1rem;
        color: #3f3f3f;
        font-weight: 300;
    }

    @media screen and (min-width: 768px) {
        justify-content: flex-start;
        width: 20rem;
        top: 2rem;
        height: 15rem;
        aspect-ratio: 4/3;

        overflow: hidden;
        margin: 0;

        div {
            height: 5rem;
        }

        img {
            height: 5rem;
        }

        h2 {
            font-size: 1rem;
        }
        p {
            width: 90%;
            font-size: 0.75rem;
        }
    }

    @media screen and (min-width: 950px) {
        width: 18rem;
        p {
            width: 75%;
        }
    }
`;
