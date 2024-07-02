const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const thomas = await prisma.user.upsert({
    where: { email: "thomas.n@compfest.id" },
    update: {},
    create: {
      id_user: "generateduser123",
      email: "thomas.n@compfest.id",
      fullname: "Thomas N",
      phone: "628123456789",
      password: "Admin123",
      role: "Admin",
    },
  });
  console.log({ thomas });
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
