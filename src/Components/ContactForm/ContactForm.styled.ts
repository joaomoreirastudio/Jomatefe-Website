import styled from "styled-components";

export const ContactFormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
    @media screen and (min-width: 1100px) {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 100rem;
        margin-top: 5rem;
        margin-bottom: 7rem;
    }
`;

export const ContactFormIntroText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 2rem;
    span {
        font-size: 0.8rem;
        color: #3f3f3f;
        font-weight: 400;
        line-height: 1.15rem;
    }
    h3 {
        color: #512700;
        font-size: 2rem;
        line-height: 1.75rem;
        padding: 0;
        padding: 0.25rem 0 0 0;
        line-height: 2rem;
    }
    p {
        width: 90%;
        text-orientation: center;
        padding: 1rem 0 0 0;
        font-size: 1rem;
        color: #3f3f3f;
        font-weight: 300;
        text-align: justify;
        letter-spacing: -0.008rem;
        line-height: 1.15rem;
    }
    @media screen and (min-width: 768px) {
    }
`;

export const ContactFormContacts = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    /* span {
        display: block;
        width: 3rem;
        height: 0.1rem;
        background-color: #512700;
        opacity: 1;
    } */

    h4 {
        padding: 0.5rem 0;
        font-size: 1rem;
        color: #512700;
    }
    p {
        font-size: 1rem;
        color: #3f3f3f;
    }

    @media screen and (min-width: 768px) {
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 0;
        /* margin-bottom: 5rem; */
    }
`;
export const ContactFormInputFirstSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    overflow: hidden;
    @media screen and (min-width: 1100px) {
    }
`;

export const ContactFormInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    input,
    textarea {
        width: 100%;
        background-color: #f1f1f1;
        border: none;
        padding: 0.7rem;
        font-size: 0.85rem;
        box-sizing: border-box;
    }
    button {
        /* width: 10rem; */
        background-color: transparent;
        border: none;
        position: relative;
        color: white;
        font-size: 0.85rem;
    }

    .btnContainer {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        border: 1px solid #512700;
        border-radius: 0.2rem;
        width: 100%;
        padding: 0.7rem 2.5rem 0.7rem 0.5rem;
        box-sizing: border-box;
        background-color: #4e2500;
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
        border-bottom: 2px solid white;
        border-right: 2px solid white;
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
    @media screen and (min-width: 1100px) {
        textarea {
            height: 5.5rem;
        }
        .arrow {
            margin-top: 0.6rem;
        }
        .btnContainer:hover .arrow span {
            border-bottom: 2px solid #4e2500;
            border-right: 2px solid #4e2500;
        }
        .arrow span {
            width: 0.5rem;
            height: 0.5rem;
        }
        .btnContainer:hover {
            background-color: white;
            color: #4e2500;
        }
        .btnContainer:hover button {
            background-color: white;
            color: #4e2500;
        }
    }
`;

export const SuccessMessage = styled.div`
    background-color: #4caf50;
    width: 100%;
    color: white;
    padding: 10px 0;
    font-size: 1rem;
    border-radius: 5px;
    text-align: center;
`;

export const ErrorMessage = styled.div`
    background-color: #f44336;
    width: 100%;
    color: white;
    padding: 10px 0;
    font-size: 1rem;
    border-radius: 5px;
    text-align: center;
`;
