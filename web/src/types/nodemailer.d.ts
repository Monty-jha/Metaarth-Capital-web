declare module 'nodemailer' {
  interface Transporter {
    sendMail(mailOptions: any): Promise<any>;
  }

  interface CreateTransporter {
    (config: any): Transporter;
  }

  const createTransporter: CreateTransporter;
  export = { createTransporter };
}
