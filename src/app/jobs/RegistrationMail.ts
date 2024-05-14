import { enviarEmail } from "../../libs/Email"

interface Data {
    user: any;
}
export default {
    key: 'RegistrationMail',
    async handle({ data }: { data: Data }) {
        const { user } = data;
        await enviarEmail(user.email, user.name);
    }
}