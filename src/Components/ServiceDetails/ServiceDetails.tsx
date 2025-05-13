import {
    Container,
    ServiceDetailsContainer,
    ServiceDetailsModule,
    ServiceDetailsModuleContainer,
} from "./ServiceDetails.styled";
import Image from "/assets/Images/sobre_nos_img_module.webp";
import PlaneamentoIMG from "../../assets/Images/circle_compass.svg";
import InteriorIMG from "../../assets/Images/Interior.svg";
import ExteriorIMG from "../../assets/Images/Exterior.svg";

const ServiceDetails = () => {
    return (
        <Container>
            <ServiceDetailsContainer>
                <div className="background--img--container">
                    <img
                        className="background--img"
                        src={Image}
                        alt="Wooden Texture"
                    />
                </div>
                <ServiceDetailsModuleContainer>
                    <ServiceDetailsModule>
                        <div>
                            <img src={PlaneamentoIMG} alt="" />
                        </div>
                        <h2>Planeamento</h2>
                        <p>
                            Na Jomatefe, o planeamento é a base do nosso
                            trabalho. Antes de dar início a qualquer projeto,
                            ouvimos atentamente as necessidades e desejos dos
                            nossos clientes, criando soluções personalizadas e
                            detalhadas. A nossa experiência de 25 anos
                            permite-nos antecipar desafios e oferecer resultados
                            que não só atendem, mas superam as expectativas.
                        </p>
                    </ServiceDetailsModule>
                    <ServiceDetailsModule>
                        <div>
                            <img src={InteriorIMG} alt="" />
                        </div>
                        <h2>Interior</h2>
                        <p>
                            A carpintaria de interiores é a nossa especialidade.
                            Criamos ambientes que combinam design,
                            funcionalidade e conforto. Desde a produção de
                            móveis sob medida até a remodelação completa de
                            espaços, cada projeto é pensado para otimizar o
                            espaço e refletir o estilo único de cada cliente.
                        </p>
                    </ServiceDetailsModule>
                    <ServiceDetailsModule>
                        <div>
                            <img src={ExteriorIMG} alt="" />
                        </div>
                        <h2>Exterior</h2>
                        <p>
                            A Jomatefe também se dedica à carpintaria de
                            exteriores, com soluções duráveis e de alta
                            qualidade. Trabalhamos com materiais específicos
                            para garantir resistência e estética, desde a
                            instalação de perfis e apainelados até pavimentos e
                            escadarias, criando espaços exteriores que aliam
                            beleza e funcionalidade.
                        </p>
                    </ServiceDetailsModule>
                </ServiceDetailsModuleContainer>
            </ServiceDetailsContainer>
        </Container>
    );
};

export default ServiceDetails;
