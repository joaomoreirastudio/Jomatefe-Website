import ContactForm from "../Components/ContactForm/ContactForm";
import MainImage from "../Components/MainImage/MainImage";
import IMG from "/assets/Images/Contact_image.webp";
function Contacts() {
    return (
        <>
            <MainImage
                Image={IMG}
                IntroTitle="Estamos aqui para ajudar!"
                Title={
                    <>
                        Entre em contacto conosco <br />e vamos transformar suas
                        ideias em realidade
                    </>
                }
            />

            <ContactForm />
        </>
    );
}
export default Contacts;
