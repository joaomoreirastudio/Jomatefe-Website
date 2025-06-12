import styled from "styled-components";

export const CategoryComponent = styled.div`
    @media screen and (min-width: 768px) {
        width: 90%;
        margin: auto;
        padding-top: 3rem;
    }
`;
export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        max-width: 70rem;
        margin: auto;
        gap: 2rem;

        .text-left {
            text-align: left;
            align-items: flex-start;
        }

        .text-right {
            text-align: right;
            justify-content: flex-end;
        }
    }

    .text-left,
    .text-right {
        display: flex;
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    padding: 3rem 0 0 0;

    img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: center center;
    }

    @media screen and (min-width: 768px) {
        width: 50rem;
        padding: 0;

        img {
            aspect-ratio: 16/9;
            object-fit: cover;
            object-position: center 50%;
        }
        .img-top {
            object-position: center top;
        }
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 90%;
    text-align: center;

    span {
        font-size: 0.9rem;
        color: #3f3f3f;
        font-weight: 400;
        line-height: 1.15rem;
    }
    h2 {
        color: #512700;
        font-size: 1.5rem;
        line-height: 1.75rem;
        padding: 0;
    }
    p {
        text-orientation: center;
        padding: 1rem 0 0 0;
        font-size: 1rem;
        color: #3f3f3f;
        font-weight: 300;
        text-align: justify;
        letter-spacing: -0.008rem;
        line-height: 1.15rem;
    }
    button {
        /* width: 10rem; */
        background-color: transparent;
        border: none;
        position: relative;
        text-decoration: none;
        color: black;
    }

    .button-right {
        margin-left: auto;
    }

    .btnContainer {
        position: relative;
        margin: 1.5rem auto 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        border: 1px solid #512700;
        border-radius: 5px;
        width: 6rem;
        padding: 0.5rem 2.5rem 0.5rem 0.5rem;
    }
    .arrow {
        transform: translate(-25%, -25%);
        transform: rotate(-90deg);
        cursor: pointer;
        margin-top: 0.4rem;
    }

    .arrow span {
        position: absolute;
        top: 60%;
        display: block;
        width: 1.25vw;
        height: 1.25vw;
        border-bottom: 2px solid #512700;
        border-right: 2px solid #512700;
        transform: rotate(45deg);
        animation: animate 2s infinite;
    }

    .arrow span:nth-child(2) {
        animation-delay: -0.2s;
    }

    .arrow span:nth-child(3) {
        animation-delay: -0.4s;
    }

    @keyframes animate {
        0% {
            opacity: 0;
            transform: rotate(45deg) translate(-10px, -10px);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: rotate(45deg) translate(20px, 20px);
        }
    }

    @media screen and (min-width: 768px) {
        width: 50%;
        margin: 0 auto;
        position: relative;

        h2 {
            padding: 0.25rem 0 1rem 0;
        }

        .btnContainer {
            margin: 1.5rem auto auto 0;
        }
        .btnContainer:hover {
            background-color: #512700;
            color: white;
        }
        .btnContainer:hover button {
            background-color: #512700;
            color: white;
        }
        button {
        }

        .btnContainer-right {
            margin: 1.5rem 0 auto auto;
        }
        .arrow {
            margin-top: 0.75rem;
        }
        .arrow span {
            width: 0.5rem;
            height: 0.5rem;
        }

        .btnContainer:hover .arrow span {
            border-bottom: 2px solid white;
            border-right: 2px solid white;
        }
        @keyframes animate {
            0% {
                opacity: 0;
                transform: rotate(45deg) translate(-15px, -15px);
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: rotate(45deg) translate(15px, 15px);
            }
        }
    }
`;
