export default {
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_HOST_PORT ,
    secure: true,
    auth: {
      user: process.env.SMTP_HOST_USER,
      pass: process.env.SMTP_HOST_PASSWORD
    }
  }