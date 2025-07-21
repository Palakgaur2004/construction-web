import connectToDatabase from "@/lib/db";
import { Booking } from "@/lib/models/booking";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const data = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      date: body.date,
      time: body.time, // ✅ Added time field
    };

    await connectToDatabase();
    await Booking.create(data); // ✅ Save in MongoDB

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
      subject: "New Site Visit Booking",
      text: `
New Site Visit Booking:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
Preferred Date: ${data.date}
Preferred Time: ${data.time}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response("Booking submitted successfully!", { status: 200 });
  } catch (error) {
    console.error("Booking Error:", error);
    return new Response("Error processing booking", { status: 500 });
  }
}
