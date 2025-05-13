import { Container, TextContainer } from "./TextComponent.styled";

interface TextComponentProps {
    Title: string;
    Text: string;
    FirstTopic: string;
    FirstText: string;
    SecondTopic: string;
    SecondText: string;
}

const TextComponent = ({
    Title,
    FirstTopic,
    FirstText,
    SecondTopic,
    SecondText,
    Text,
}: TextComponentProps) => {
    return (
        <Container>
            <TextContainer>
                <h3>{Title}</h3>
                <p>{Text}</p>
                <span>{FirstTopic}</span>
                <ul>
                    {FirstText.split("\n").map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <span>{SecondTopic}</span>
                <p>{SecondText}</p>
            </TextContainer>
        </Container>
    );
};

export default TextComponent;
