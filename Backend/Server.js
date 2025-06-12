"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)(); // ⚠️ Define primeiro a app
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const transporter = nodemailer_1.default.createTransport({
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
app.post("/send-email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, telefone, email, mensagem } = req.body;
    // 🚨 Verifica se algum campo está vazio
    if (!nome || !telefone || !email || !mensagem) {
        res.status(400).json({
            message: "⚠️ Todos os campos são obrigatórios!",
        });
        return;
    }
    try {
        const info = yield transporter.sendMail({
            from: `"${nome}" <geral@jfcarpintaria.pt>`,
            to: "geral@jfcarpintaria.pt",
            subject: `Novo contato de ${nome}`,
            text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`,
        });
        console.log("E-mail enviado com sucesso!", info);
        res.status(200).json({ message: "✅ E-mail enviado com sucesso!" });
    }
    catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
        res.status(500).json({ message: "⚠️ Erro ao enviar o e-mail." });
    }
}));
// 🚀 Inicia o servidor
app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
