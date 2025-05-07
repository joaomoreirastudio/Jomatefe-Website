import {
    MainVideoContainer,
    MainVideoSection,
    VideoTitleContainer,
} from "../../Components/MainVideo/MainVideo.styled.ts";

interface MainVideoProps {
    videoSrc: string;
    title: string;
    button?: string;
    subTitle: string;
}

const MainVideo = ({ videoSrc, title, button, subTitle }: MainVideoProps) => {
    return (
        <>
            <MainVideoSection>
                <MainVideoContainer>
                    <video autoPlay loop muted>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </MainVideoContainer>
                <VideoTitleContainer>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                    {button && <button>{button}</button>}
                </VideoTitleContainer>
            </MainVideoSection>
        </>
    );
};

export default MainVideo;
