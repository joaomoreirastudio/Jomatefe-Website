import styled from "styled-components";

export const MainVideoSection = styled.section`
    position: relative;
    width: 100%;
    @media screen and (min-width: 768px) {
    }
`;

export const MainVideoContainer = styled.div`
    width: 100vw;
    height: 75vh;
    video {
        width: 100vw;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (min-width: 768px) {
    }
`;

export const VideoTitleContainer = styled.div`
    position: absolute;
    top: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        width: 90%;
        color: white;
        font-size: 1.75rem;
        padding-bottom: 1rem;
        margin: auto;
        text-align: center;
    }

    p {
        width: 80%;
        font-size: 1rem;
        text-align: center;
        color: white;
    }

    button {
        font-size: 1rem;
        background-color: transparent;
        text-decoration: none;
        border: white solid 1.5px;
        padding: 1rem 2rem;
        color: white;
        border-radius: 0.5rem;

        &:hover {
            background-color: white;
            color: black;
        }
    }
    @media screen and (min-width: 768px) {
        width: 100%;

        h1 {
            font-size: 3.5rem;
            padding-bottom: 1rem;
            margin: auto;
            text-align: center;
        }
        p {
            font-size: 1.5rem;
            text-align: center;
        }
        button {
            font-size: 1.5rem;

            &:hover {
                background-color: white;
                color: black;
            }
        }
    }
`;
