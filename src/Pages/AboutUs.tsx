import ContactForm from "../Components/ContactForm/ContactForm";
import MainImage from "../Components/MainImage/MainImage";
import YearsSection from "../Components/25YearsSection/25YearsSection.tsx";
import TextComponent from "../Components/TextComponent/TextComponent.tsx";
import IMG from "/assets/Images/sobre_nos_img.webp";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails.tsx";

function AboutUs() {
    return (
        <>
            <MainImage
                Image={IMG}
                SubTitle={
                    <>
                        Com dedicação e experiência, transformamos cada projeto
                        numa verdadeira obra-prima,
                        <br /> feita à medida das suas necessidades.
                    </>
                }
                Title="A Nossa Paixão pela Carpintaria"
            />
            <YearsSection />
            <TextComponent
                Title="A Nossa Paixão pela Carpintaria"
                Text="A Jomatefe nasceu em 2021, fruto de 25 anos de experiência e know-how em carpintaria de interiores e exteriores. Com uma equipa dedicada e altamente qualificada, oferecemos soluções personalizadas, sempre com foco na qualidade e satisfação total dos nossos clientes.
Desde a produção de mobiliário sob medida até a construção e remodelação de interiores e exteriores, trabalhamos com os melhores equipamentos e materiais, garantindo acabamentos de excelência. Contamos com uma estufa de primários e acabamentos para lacagem e envernizamento, assegurando a máxima durabilidade e estética para todos os projetos.
"
                FirstTopic="Os nossos serviços incluem:"
                FirstText="Mobiliário Sob Medida: Cozinhas, móveis de banho, roupeiros, salas e quartos, sempre adaptados às suas necessidades e ao seu estilo.
Carpintaria de Interiores e Exteriores: Perfis, apainelados, pavimentos e outros acabamentos personalizados para o seu espaço.
Remodelações e Construção: Projetos completos de remodelação de interiores e exteriores, com foco na funcionalidade e estética.
Lacagem e Envernizamento: Com uma estufa de acabamentos, garantimos superfícies perfeitas, tanto para móveis novos como para a renovação de peças antigas.
Manutenção e Assistência: Renovação de mobiliário antigo e outros serviços de manutenção para garantir a durabilidade do seu investimento."
                SecondTopic="Equipamento de Alta Qualidade"
                SecondText="Para garantir os melhores resultados, contamos com máquinas de última geração, incluindo máquinas CNC e outros equipamentos topo de gama. Estas tecnologias permitem-nos trabalhar com precisão e eficiência, garantindo acabamentos impecáveis e prazos de entrega rápidos, sem comprometer a qualidade.
O nosso portfólio abrange uma vasta gama de serviços, desde espaços comerciais e escritórios até cozinhas, salas, quartos e casas de banho. Garantimos também a manutenção e renovação de mobiliário antigo, preservando a sua qualidade e aparência.
Na Jomatefe, temos sempre uma solução para a sua casa ou negócio, com a garantia de resultados que superam as expectativas."
            />
            <ServiceDetails />

            <ContactForm />
        </>
    );
}
export default AboutUs;
