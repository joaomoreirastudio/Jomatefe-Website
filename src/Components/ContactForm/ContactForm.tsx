import {
    ContactFormContacts,
    ContactFormContainer,
    ContactFormInputContainer,
    ContactFormInputFirstSection,
    ContactFormIntroText,
} from "./ContactForm.styled";

const ContactForm = () => {
    return (
        <>
            <ContactFormContainer>
                <div>
                    <ContactFormIntroText>
                        <span>Contactos</span>
                        <h3>
                            Vamos começar <br />
                            um projeto novo
                        </h3>
                        <p>
                            Está pronto para transformar o seu espaço? Entre em
                            contacto connosco e juntos vamos criar a solução
                            perfeita para as suas necessidades. Estamos à
                            disposição para discutir o seu projeto e oferecer o
                            melhor em carpintaria personalizada.
                        </p>
                    </ContactFormIntroText>

                    <ContactFormContacts>
                        <div>
                            <span></span>
                            <h4>Telefone</h4>
                            <p>+351 912405138</p>
                            <p>+351 914581193</p>
                        </div>
                        <div>
                            <span></span>
                            <h4>Email</h4>
                            <p>geral@jfcarpintaria.pt</p>
                        </div>
                        <div>
                            <span></span>
                            <h4>Morada</h4>
                            <p>Rua Dr. Avelino Costa, 786</p>
                            <p>4415-026 Perosinho</p>
                        </div>
                    </ContactFormContacts>
                </div>
                <ContactFormInputContainer>
                    <ContactFormInputFirstSection>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Telefone" />
                    </ContactFormInputFirstSection>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Mensagem"></textarea>
                    <div className="btnContainer">
                        <button>Enviar</button>
                        <div className="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </ContactFormInputContainer>
            </ContactFormContainer>
        </>
    );
};

export default ContactForm;
