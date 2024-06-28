import * as nodemailer from 'nodemailer';
import EmailConfig from '../app/config/EmailConfig';

export async function enviarEmail(destinatario: string, name: string) {
  const transporter = nodemailer.createTransport(EmailConfig as any);
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: destinatario,
    subject: "Testing Email",
    html: ` <div class="container">
    <h1> </h1>
    <h3>Caro/a, ${name}</h3>
    <p>Agradecemos por se inscrever em nosso programa de formação. Confirmamos que sua inscrição foi recebida com sucesso. </p>

    <p> Em anexo, você encontrará a fatura correspondente à inscrição, com informações para efetuar o pagamento por transferência bancária ou utilizando a referência de pagamento.</p> 
        
    <p>  O nosso centro de formação, SFFS - Sociedade de Formação Financeira em Seguros, está localizado em Casa nº 54, Rua 8, Bairro Mártires de Kifangondo, em frente ao Empório das Joias, nos arredores das torres do Banco BAI. Caso precise entrar em contato conosco, ligue para o terminal telefônico 946 099 073.</p>
        
    <p> Agradecemos sua participação e esperamos vê-lo(a) em breve.</p>
        
    <p> Atenciosamente,</p>
        
    <p> SFFS - Sociedade de Formação Financeira em Seguros</p>

  </div>`,
  };

  transporter.sendMail(mailOptions, (error:any, info:any) => {
    if (error) {
      console.log('Erro ao enviar email: ' + error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}