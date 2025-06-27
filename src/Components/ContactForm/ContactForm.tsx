import { useState } from "react";
import {
    ContactFormContacts,
    ContactFormContainer,
    ContactFormInputContainer,
    ContactFormInputFirstSection,
    ContactFormIntroText,
    SuccessMessage,
    ErrorMessage,
} from "./ContactForm.styled";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        mensagem: "",
    });

    const [message, setMessage] = useState({ type: "", text: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        // 🚨 Atualiza o estado antes das validações para evitar bloqueios
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // ✅ Validações sem impedir atualização do campo
        if (name === "email" && !value.includes("@")) {
            setMessage({ type: "error", text: "O email deve conter um @." });
        } else if (name === "telefone" && !/^\+?[0-9]{9,}$/.test(value)) {
            setMessage({
                type: "error",
                text: "O telefone deve conter pelo menos 9 números.",
            });
        } else {
            setMessage({ type: "", text: "" }); // Limpa mensagem de erro ao digitar corretamente
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !formData.nome ||
            !formData.telefone ||
            !formData.email ||
            !formData.mensagem
        ) {
            setErrors({
                ...errors,
                geral: "Todos os campos são obrigatórios!",
            });
            return;
        }

        try {
            const response = await fetch(
                "https://www.jfcarpintaria.pt/backend/send-email",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            // const result = await response.json();
            const text = await response.text();
            console.log("🔍 Resposta bruta:", text);

            try {
                const result = JSON.parse(text); // só se quiseres forçar
                console.log("✅ JSON parseado:", result);
            } catch (e) {
                console.error("❌ Erro ao fazer parse do JSON:", e);
            }
            if (response.ok) {
                setErrors({});
                setMessage({
                    type: "success",
                    text: "Email enviado com sucesso!",
                });

                // 🚀 Limpa os campos IMEDIATAMENTE após o envio
                setFormData({
                    nome: "",
                    telefone: "",
                    email: "",
                    mensagem: "",
                });

                setTimeout(() => {
                    setMessage({ type: "", text: "" }); // Limpa a mensagem de sucesso
                }, 3000);
            } else {
                // alert(result.message);
            }
        } catch (error) {
            console.log(error);
            alert("⚠️ Falha na conexão com o servidor!");
        }
    };

    return (
        <ContactFormContainer>
            <div>
                <ContactFormIntroText>
                    <span>Contactos</span>
                    <h3>
                        Vamos começar <br /> um projeto novo
                    </h3>
                    <p>
                        Está pronto para transformar o seu espaço? Entre em
                        contacto connosco e juntos vamos criar a solução
                        perfeita para as suas necessidades. Estamos à disposição
                        para discutir o seu projeto e oferecer o melhor em
                        carpintaria personalizada.
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

            {/* Aqui removemos o <form> extra, deixando apenas este */}
            <ContactFormInputContainer>
                <ContactFormInputFirstSection>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        placeholder="Telefone"
                        onChange={handleChange}
                    />
                </ContactFormInputFirstSection>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                ></textarea>
                {message.type === "success" && (
                    <SuccessMessage>{message.text}</SuccessMessage>
                )}
                {message.type === "error" && (
                    <ErrorMessage>{message.text}</ErrorMessage>
                )}
                {errors.geral && <ErrorMessage>{errors.geral}</ErrorMessage>}

                <div className="btnContainer" onClick={handleSubmit}>
                    <button type="submit" aria-required onClick={handleSubmit}>
                        Enviar
                    </button>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </ContactFormInputContainer>
        </ContactFormContainer>
    );
};

export default ContactForm;
