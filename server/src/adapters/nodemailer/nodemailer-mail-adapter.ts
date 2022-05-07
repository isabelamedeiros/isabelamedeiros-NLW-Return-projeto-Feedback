import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9937a41f35fd27",
    pass: "ed17b717f5b259"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Medeiros <mmedeirosisabela@gmail.com>',
      to: 'Isabela Medeiros <mmedeirosisabela@gmail.com>',
      subject,
      html: body
    });
  }
}