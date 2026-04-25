import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../app/generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashed = await bcrypt.hash('Mjhkjajj1998!', 12);
  const user = await prisma.adminUser.upsert({
    where: { email: 'kylieqttruong@gmail.com' },
    update: { password: hashed },
    create: { email: 'kylieqttruong@gmail.com', password: hashed },
  });
  console.log('Admin user ready:', user.email);
}

main().catch(console.error).finally(() => prisma.$disconnect());
