import YearsIcon from "../../assets/25_years_icon.svg";
import {
    ImgContainer,
    YearsSectionContainer,
    YearsTextContainer,
} from "./25YearsSection.styled";

const YearsSection = () => {
    return (
        <>
            <YearsSectionContainer>
                <ImgContainer>
                    <img src={YearsIcon} />
                </ImgContainer>
                <YearsTextContainer>
                    <span>
                        Soluções personalizadas com qualidade e experiência.
                    </span>
                    <h2>25 Anos de Excelência em Carpintaria Personalizada</h2>
                    <p>
                        Com 25 anos de experiência em carpintaria de interiores
                        e exteriores, a Jomatefe é especialista na criação de
                        mobiliário e soluções personalizadas para habitação,
                        comércio e escritórios. Usamos tecnologia de ponta e
                        materiais de alta qualidade para garantir acabamentos
                        perfeitos e a satisfação total de nossos clientes.
                        Transformamos sonhos em madeira, unindo funcionalidade,
                        design e durabilidade.
                    </p>
                </YearsTextContainer>
            </YearsSectionContainer>
        </>
    );
};

export default YearsSection;
