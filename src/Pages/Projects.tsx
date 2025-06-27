import MainVideo from "../Components/MainVideo/MainVideo.tsx";
import ProductList from "../Components/ProductList/ProductList.tsx";
import Video from "/assets/Video/video_projects.mp4";

function Projects() {
    return (
        <>
            <MainVideo
                videoSrc={Video}
                title={"Projetos que Inspiram"}
                subTitle={
                    "Explore os projetos que transformaram espaços em ambientes únicos e personalizados."
                }
            ></MainVideo>
            <ProductList />
        </>
    );
}
export default Projects;
