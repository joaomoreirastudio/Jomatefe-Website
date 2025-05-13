import MainVideo from "../Components/MainVideo/MainVideo.tsx";
import YearsSection from "../Components/25YearsSection/25YearsSection.tsx";
import CategoryPreview from "../Components/CategoryPreview/CategoryPreview.tsx";
import Video from "/assets/Video/video_main.mp4";
const MobiliarioImg = "/assets/Images/Habitacao/habitacao-32.webp";
const EscritorioImg = "/assets/Images/Escritorio/escritorio-16.webp";
const HabitacaoImg = "/assets/Images/Habitacao/habitacao-31.webp";
const ComercioImg = "/assets/Images/Comercio/comercio-13.webp";

const categoryPreviews = [
    {
        Category: "Mobiliário",
        Title: "Mobiliário Sob Medida para Todos os Estilos",
        Text: "Transformamos ideias em peças únicas! Criamos mobiliário personalizado para cozinhas, salas, quartos e banheiros, sempre priorizando funcionalidade e design. Cada peça é feita sob medida, com materiais de alta qualidade e acabamentos impecáveis, para atender às suas necessidades e realçar o seu espaço.",
        Image: MobiliarioImg,
    },
    {
        Category: "Escritório",
        Title: "Soluções para Espaços de Trabalho Inspiradores",
        Text: "Criamos ambientes de trabalho que combinam ergonomia, estilo e eficiência. Desde mobiliário sob medida até painéis e divisórias personalizadas, a nossa carpintaria garante soluções que otimizam o espaço e refletem a identidade da sua empresa.",
        Image: EscritorioImg,
    },
    {
        Category: "Habitação",
        Title: "Conforto e Estilo para o Seu Lar",
        Text: "Dê vida aos seus sonhos com soluções de carpintaria para todas as áreas da sua casa. Produzimos desde portas e roupeiros até escadarias e pavimentos, sempre com atenção aos detalhes e acabamentos de alta qualidade. Cada projeto é único, feito para criar um lar que combina beleza e funcionalidade.",
        Image: HabitacaoImg,
    },
    {
        Category: "Comércio",
        Title: "Carpintaria Personalizada para o Seu Negócio",
        Text: "Transforme o seu espaço comercial em um ambiente atraente e funcional. Criamos móveis e acabamentos sob medida para lojas, restaurantes, e outros negócios, sempre alinhados com as suas necessidades e a identidade da sua marca. Oferecemos soluções que destacam o seu espaço e encantam os seus clientes.",
        Image: ComercioImg,
    },
];

function Homepage() {
    return (
        <>
            <MainVideo
                videoSrc={Video}
                title="Transformamos os seus sonhos em madeira."
                button="Peça um orçamento"
                subTitle=""
            />
            <YearsSection />

            {categoryPreviews.map((categoryPreview, index) => (
                <CategoryPreview
                    key={index}
                    Category={categoryPreview.Category}
                    Title={categoryPreview.Title}
                    Text={categoryPreview.Text}
                    Image={categoryPreview.Image}
                    index={index}
                ></CategoryPreview>
            ))}
        </>
    );
}

export default Homepage;
