import { Express, Request, Response } from "express";
import nodemailer from "nodemailer";

export const enquiry = (app: Express) => {
  app.post("/send-email", (req: Request, res: Response) => {
    const { name, organization, email, mobile, product, address, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },

    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: "skspowertech@gmail.com",
        subject: "New Business Enquiry",
        text: `
          Name: ${name}
          Organization: ${organization}
          Email: ${email}
          Mobile: ${mobile}
          Product: ${product}
          Address: ${address}
          Message: ${message}
        `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};
