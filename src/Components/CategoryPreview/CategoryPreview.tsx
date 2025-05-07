import {
    CategoryComponent,
    CategoryPreviewContainer,
    ImageContainer,
    TextContainer,
} from "./CategoryPreview.styled";
import { useState, useEffect } from "react";

interface CategoryPreviewProps {
    Category: string;
    Title: string;
    Text: string;
    Image: string;
    index: number;
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
    Category,
    Title,
    Text,
    Image,
    index,
}) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <CategoryComponent>
            <CategoryPreviewContainer>
                {isDesktop ? (
                    index % 2 === 0 ? (
                        <ImageContainer className="image-left">
                            <img className="img-top" src={Image} alt="" />
                        </ImageContainer>
                    ) : (
                        <TextContainer className="text-right">
                            <span>{Category}</span>
                            <h2>{Title}</h2>
                            <p>{Text}</p>
                            <div className="btnContainer btnContainer-right">
                                <button>Saber mais</button>
                                <div className="arrow">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </TextContainer>
                    )
                ) : (
                    <ImageContainer>
                        <img src={Image} alt="" />
                    </ImageContainer>
                )}
                {isDesktop ? (
                    index % 2 === 0 ? (
                        <TextContainer className="text-left">
                            <span>{Category}</span>
                            <h2>{Title}</h2>
                            <p>{Text}</p>
                            <div className="btnContainer">
                                <button className="button-right">
                                    Saber mais
                                </button>
                                <div className="arrow">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </TextContainer>
                    ) : (
                        <ImageContainer>
                            <img src={Image} alt="" />
                        </ImageContainer>
                    )
                ) : (
                    <TextContainer>
                        <span>{Category}</span>
                        <h2>{Title}</h2>
                        <p>{Text}</p>
                        <div className="btnContainer">
                            <button>Saber mais</button>
                            <div className="arrow">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </TextContainer>
                )}
            </CategoryPreviewContainer>
        </CategoryComponent>
    );
};
export default CategoryPreview;
