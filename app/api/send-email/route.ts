import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rishabhsrivastava921@gmail.com',
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: 'rishabhsrivastava921@gmail.com',
            subject: `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
