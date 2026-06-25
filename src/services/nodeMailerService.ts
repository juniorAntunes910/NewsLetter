import "dotenv/config";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
});

export async function sendEmail(conteudo: any) {
    try{
        const mailOptions = {
            from: `Newsletter do Junior <${process.env.STMP_USER}>`,
            to: "gabriel_wotdke@estudante.sesisenai.org.br",
            subject: "Feliz no simples",
            text: "Toma newsletter no seco",
            html: `${conteudo}`
        }

        const info = await transporter.sendMail(mailOptions);
        console.log("email enviado com sucesso");
    }catch(error){
        console.log(error);
    }
}