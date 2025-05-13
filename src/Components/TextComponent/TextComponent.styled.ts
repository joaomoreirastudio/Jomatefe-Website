import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    margin-top: 3rem;
    padding-bottom: 3rem;
`;

export const TextContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    margin: auto;
    ul {
        padding-left: 1.5rem;
    }

    li {
        font-size: 1rem;
        color: #3f3f3f;
        font-weight: 300;
        line-height: 1.5rem;
        list-style-type: disc; /* Define bullets como círculo preenchido */
    }

    h3 {
        padding: 2rem 0;
        text-align: center;
        color: #512700;
        font-size: 1.5rem;
        line-height: 1.75rem;
    }

    p {
        width: 100%;
        text-orientation: center;
        padding: 0.25rem 0 0 0;
        font-size: 1rem;
        color: #3f3f3f;
        font-weight: 300;
        text-align: justify;
        letter-spacing: -0.008rem;
        line-height: 1.15rem;
    }
    span {
        font-size: 1.25rem;
        color: #3f3f3f;
        font-weight: 600;
        padding-top: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        width: 80%;
        max-width: 100rem;
        h2 {
            padding: 0;
            text-align: left;
            margin: 0;
            width: 30rem;
        }
    }
`;
