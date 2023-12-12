import { render } from "@react-email/render";
import WelcomeTemplate from "@/components/format_email";
const nodemailer = require('nodemailer');

export default async function handler(req,res) {
  const { name, email, phone, message } = req.body;
  await sendEmail({
    to: "domsattech@gmail.com",
    subject: "New Message from Domsat Tech",
    html: render(<WelcomeTemplate name={name} email={email} phone={phone} message={message} />),
  });

  return res.status(200).json({ message: "Email sent successfully",});
}

// Replace with your SMTP credentials
const smtpOptions = {
  service: "gmail",
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
}

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL,
    ...data,
  })
}
