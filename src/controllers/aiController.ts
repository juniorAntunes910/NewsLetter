const { gerarNewsLetter } = require("../services/aiService");
const { sendEmail } = require("../services/nodeMailerService");



    async function newsletter(req: { body: { assunto: any; }; }, res: any){
        const { assunto } = req.body;
        const conteudo = await gerarNewsLetter(assunto);

        console.log("Enviando Email")
        const conteudoFormatado = conteudo.replace(/\n/g, "");
        await sendEmail(conteudoFormatado);
        return res.json({
            conteudoFormatado
        });
    }


module.exports = {
    newsletter
}