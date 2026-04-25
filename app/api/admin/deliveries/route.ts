import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const deliveries = await prisma.deliverySchedule.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(deliveries);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, status } = await req.json();
    const updated = await prisma.deliverySchedule.update({ where: { id }, data: { status } });
    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
