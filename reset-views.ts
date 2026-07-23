import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.pageView.upsert({
    where: { slug: 'global' },
    update: { count: 200 },
    create: { slug: 'global', count: 200 },
  })
  console.log("Views reset to 200")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
