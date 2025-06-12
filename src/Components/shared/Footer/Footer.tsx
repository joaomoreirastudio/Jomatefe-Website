import {
    Footer,
    FooterContacts,
    FooterContainerItems,
    FooterText,
    FooterDev,
} from "./Footer.styled";
import WhiteLogo from "../../../assets/jomafe-logo-branco.svg";

const footer = () => {
    return (
        <Footer>
            <FooterContainerItems>
                <FooterText>
                    <div>
                        <img src={WhiteLogo} alt="Jomatefe Logo" />
                    </div>

                    <p>
                        A Jomatefe é uma empresa especializada em carpintaria de
                        interiores e exteriores, com 25 anos de experiência.
                        Criamos soluções sob medida para habitação, comércio e
                        escritórios, sempre com qualidade e atenção aos
                        detalhes.
                    </p>
                </FooterText>
                <FooterContacts>
                    <h3>Entre em contacto:</h3>
                    <span>+351 912405138</span>
                    <span>+351 914581193</span>
                    <span>
                        <a href="mailto:geral@jfcarpintaria.pt">
                            geral@jfcarpintaria.pt
                        </a>
                    </span>
                    <span>
                        Rua Dr. Avelino Costa, 786<br></br>4415-026 Perosinho
                    </span>
                </FooterContacts>
            </FooterContainerItems>
            <div className="line--break"></div>
            <FooterDev>
                <div>
                    <span>2025 - Direitos reservados</span>
                </div>
                <div>
                    <span>
                        Desenvolvido por{" "}
                        <a href="https://www.joaomoreira.com/" target="_blank">
                            João Moreira
                        </a>
                    </span>
                </div>
            </FooterDev>
        </Footer>
    );
};

export default footer;
