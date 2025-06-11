import styled from "styled-components";

export const YearsSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding: 3rem 0 0 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        width: 90vw;
        margin: auto;
        padding: 3rem 0 0 0;
        gap: 5%;
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    padding: 2rem 0;

    img {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        width: 17rem;

        img {
            width: 100%;
        }
    }
`;

export const YearsTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;

    span {
        text-align: center;
        font-size: 0.9rem;
        color: #3f3f3f;
        font-weight: 400;
        line-height: 1.15rem;
    }
    h2 {
        padding: 0.5rem 0;
        text-align: center;
        color: #512700;
        font-size: 1.5rem;
        line-height: 1.75rem;
    }
    p {
        text-orientation: center;
        text-align: justify;
        font-size: 1rem;
        color: #3f3f3f;
        font-weight: 300;

        line-height: 1.15rem;
    }
    @media screen and (min-width: 768px) {
        align-items: flex-start;

        flex-wrap: wrap;
        height: 100%;
        width: 40rem;
        max-width: 50rem;

        span {
            text-align: left;
        }
        h2 {
            padding: 0;
            text-align: left;
            margin: 0;
            width: 30rem;

            p {
                text-align: justify;
            }
        }
    }
`;
