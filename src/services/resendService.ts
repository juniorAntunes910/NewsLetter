import { Resend } from "resend"
import "dotenv/config"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(email: any) {
    try {
        console.log("Entrando no envio")
        const { data, error } = await resend.batch.send([
            {
                from: 'onboarding@resend.dev',
                to: ['delivered@resend.dev'],
                subject: "Teste newsletter",
                html: `${email}`
            }
        ]);

        console.log(data);
        console.log(error);

    } catch (error) {
        console.log(error);
    }
}