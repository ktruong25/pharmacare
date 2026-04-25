import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendDeliveryNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, address, city, scheduledDate, scheduledTime, rxNumbers, notes } = body;

    if (!name || !phone || !address || !city || !scheduledDate || !scheduledTime) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const delivery = await prisma.deliverySchedule.create({
      data: { name, phone, address, city, scheduledDate, scheduledTime, rxNumbers: rxNumbers || null, notes: notes || null },
    });

    await sendDeliveryNotification(delivery);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
