/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.resolve(__dirname, "../build")));
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

app.post(
  "/api/contact",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const title = req.body.title;
    const comment = req.body.comment;
    const mail = {
      from: name,
      to: process.env.EMAIL_ADDRESS,
      subject: "Mensaje Desde Web Shekinah TC",
      html: `<p>Nombre: ${name}</p>
    <p>Titulo: ${title}</p>
    <p>Email: ${email}</p>
    <p>Comentario: ${comment}</p>
    `,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log(error);
      } else {
        res.json({ code: 200, status: "Mensaje Enviado" });
      }
    });
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is online on port: ${PORT}`);
});
