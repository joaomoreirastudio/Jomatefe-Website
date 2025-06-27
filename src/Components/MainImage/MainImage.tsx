import {
    MainImageContainer,
    MainIMG,
    MainTextContainer,
} from "./MainImage.styled.ts";

interface MainImageProps {
    Title: React.ReactNode;
    IntroTitle?: string;
    SubTitle?: React.ReactNode;
    Image: string;
}
const MainImage = ({ IntroTitle, Title, Image, SubTitle }: MainImageProps) => {
    return (
        <>
            <MainImageContainer>
                <MainIMG>
                    <img src={Image} alt="" />
                </MainIMG>
                <MainTextContainer>
                    <p>{IntroTitle}</p>
                    <h2>{Title}</h2>
                    <p>{SubTitle}</p>
                </MainTextContainer>
            </MainImageContainer>
        </>
    );
};

export default MainImage;
