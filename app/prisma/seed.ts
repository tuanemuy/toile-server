import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const testUser = await prisma.user.upsert({
    where: { authId: 'l5EIOJDBzqVm40kxYqavYU3FouF3' },
    update: {},
    create: {
      authId: 'l5EIOJDBzqVm40kxYqavYU3FouF3',
      username: 'test-user',
      profile: {
        create: {
          name: 'テストユーザー',
        },
      },
    },
  });

  console.log(testUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
