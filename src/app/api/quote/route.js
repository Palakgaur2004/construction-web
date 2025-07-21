import connectToDatabase from "@/lib/db";
import  Quote  from "@/lib/models/quote";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectToDatabase();

    const body = await req.json();

    const data = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    };

    const newQuote = new Quote(data);
    await newQuote.save();

    
const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Quote Request",
      text: `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Message: ${data.message}
      `,
    };
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Quote Error:", error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }
}
