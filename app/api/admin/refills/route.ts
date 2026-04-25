import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const refills = await prisma.refillRequest.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(refills);
}

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id, status } = await req.json();
  const updated = await prisma.refillRequest.update({
    where: { id },
    data: { status },
  });
  return NextResponse.json(updated);
}
