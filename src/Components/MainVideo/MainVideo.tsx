import {
    MainVideoContainer,
    MainVideoSection,
    VideoTitleContainer,
} from "../../Components/MainVideo/MainVideo.styled.ts";
import { useNavigate } from "react-router-dom";

interface MainVideoProps {
    videoSrc: string;
    title: string;
    button?: string;
    subTitle: string;
}

const MainVideo = ({ videoSrc, title, button, subTitle }: MainVideoProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Contacts");
    };
    return (
        <>
            <MainVideoSection>
                <MainVideoContainer>
                    <video autoPlay loop muted playsInline>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </MainVideoContainer>
                <VideoTitleContainer>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                    {button && <button onClick={handleClick}>{button}</button>}
                </VideoTitleContainer>
            </MainVideoSection>
        </>
    );
};

export default MainVideo;
