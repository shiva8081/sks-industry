import express, { Express, Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
// import bodyParser from "body-parser";

const app: Express = express();
app.use(bodyParser.json());

export const enquiry = (app: Express) => {
  // app.use(bodyParser.json());

 

  app.post("/send-email", async (req: Request, res: Response) => {
    try {
      console.log("Received request:", req.body);

      const { name, organization, email, mobile, product, address, message } =
        req.body;
      if (!name || !email || !mobile) {
        return res.status(400).json({ error: "Missing required fields" });
      }

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

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);

      return res.status(200).json({ message: "Email sent successfully" }); 
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" }); 
    }
  });
};
