import { createTransport } from "nodemailer";
export const sendMail = async (text) => {
  const transporter = createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    },
    // from mailtrap website  intergrations
  });
  await transporter.sendMail({
    subject: "CONTACT MESSAGE REQUEST FROM PORTFOLIO",
    to: process.env.MYMAIL,
    from: process.env.MYMAIL,
    text,
  });
};
