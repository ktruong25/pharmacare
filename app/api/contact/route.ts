import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendContactNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const msg = await prisma.contactMessage.create({
      data: { name, phone: phone || null, email, subject: subject || null, message },
    });

    await sendContactNotification(msg);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
