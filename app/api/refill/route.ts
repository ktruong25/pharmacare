import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendRefillNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, rxNumber, pickup, notes } = body;

    if (!name || !phone || !rxNumber) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const refill = await prisma.refillRequest.create({
      data: { name, phone, rxNumber, pickup: pickup || null, notes: notes || null },
    });

    await sendRefillNotification(refill);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
