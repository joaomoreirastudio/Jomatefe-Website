import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express(); // ⚠️ Define primeiro a app
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: "cpanel160.dnscpanel.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verifica se a conexão SMTP está funcionando
transporter
    .verify()
    .then(() => console.log("SMTP configurado corretamente!"))
    .catch((error) => console.error("Erro ao verificar SMTP:", error));

app.post("/send-email", async (req: Request, res: Response): Promise<void> => {
    const { nome, telefone, email, mensagem } = req.body;

    // 🚨 Verifica se algum campo está vazio
    if (!nome || !telefone || !email || !mensagem) {
        res.status(400).json({
            message: "⚠️ Todos os campos são obrigatórios!",
        });
        return;
    }

    try {
        const info = await transporter.sendMail({
            from: `"${nome}" <geral@jfcarpintaria.pt>`,
            to: "geral@jfcarpintaria.pt",
            subject: `Novo contato de ${nome}`,
            text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`,
        });

        console.log("E-mail enviado com sucesso!", info);
        res.status(200).json({ message: "✅ E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
        res.status(500).json({ message: "⚠️ Erro ao enviar o e-mail." });
    }
});

// 🚀 Inicia o servidor
app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
