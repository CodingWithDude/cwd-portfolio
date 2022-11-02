import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const {
  NEXT_PUBLIC_SENDGRID_API_KEY: API_KEY,
  NEXT_PUBLIC_SENDGRID_FROM_EMAIL: FROM_EMAIL,
  NEXT_PUBLIC_SENDGRID_TO_EMAIL: TO_EMAIL,
} = process.env;

sgMail.setApiKey(API_KEY!);

type Data = { success: boolean };

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;
    const msg = {
      to: `${TO_EMAIL}`,
      from: `${FROM_EMAIL}`,
      subject: `New Portfolio Message From ${name.toUpperCase()}`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`,
    };
    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).json({ success: false });
    }
  }
};
