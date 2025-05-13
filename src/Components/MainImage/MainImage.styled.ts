import styled from "styled-components";

export const MainImageContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 80vh;

    @media screen and (min-width: 768px) {
        height: 40vw;
        max-height: 1000px;
    }
`;

export const MainIMG = styled.div`
    width: 100vw;
    height: 80vh;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: 768px) {
        height: 40vw;
        max-height: 1000px;
    }
`;

export const MainTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;

    p {
        font-size: 1rem;
        width: 80%;
        line-height: 1.25rem;
    }

    h2 {
        width: 90%;
        font-size: 1.75rem;
        line-height: 2rem;
        padding: 0.25rem 0;
    }

    @media screen and (min-width: 768px) {
        p {
            font-size: 1vw;
            line-height: 1.25vw;
        }
        h2 {
            font-size: 1.8vw;
            line-height: 2vw;
        }
    }
`;
