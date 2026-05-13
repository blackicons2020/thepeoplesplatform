import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import SupportMessage from '@/models/SupportMessage';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, attachment } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    await connectDB();

    const newMessage = await SupportMessage.create({
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      attachment: attachment || '',
      status: 'unread'
    });

    return NextResponse.json({ message: 'Your message has been sent successfully!', id: newMessage._id }, { status: 201 });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Internal server error. Please try again later.' }, { status: 500 });
  }
}
