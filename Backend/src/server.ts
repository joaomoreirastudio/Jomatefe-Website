import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Verifica Content-Type recebido em cada request
app.use((req, res, next) => {
    console.log("📦 Content-Type:", req.headers["content-type"]);
    next();
});

const transporter = nodemailer.createTransport({
    host: "mail.jfcarpintaria.pt",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter
    .verify()
    .then(() => console.log("✅ SMTP configurado corretamente!"))
    .catch((error) => console.error("⚠️ Erro ao verificar SMTP:", error));

const router = express.Router();

router.post("/send-email", async (req: Request, res: Response) => {
    console.log("🔥 Chegou ao backend:", req.body);

    const { nome, telefone, email, mensagem } = req.body;

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
            text: `Nome: ${nome}
Telefone: ${telefone}
Email: ${email}
Mensagem: ${mensagem}`,
        });

        console.log("✅ E-mail enviado com sucesso!", info);
        res.status(200).json({ message: "✅ E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("❌ Erro ao enviar o e-mail:", error);
        res.status(500).json({ message: "⚠️ Erro ao enviar o e-mail." });
    }
});

app.use("/backend", router);

// 🔧 Apenas ativa localmente — Passenger ignora isto em produção
if (require.main === module) {
    app.listen(5000, () => {
        console.log("🚀 Servidor local ativo na porta 5000");
    });
}
