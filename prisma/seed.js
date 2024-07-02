const { PrismaClient } = require("@prisma/client");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function main() {
  const userId = "generateduser123"; // Replace with your unique user ID

  // Upsert user in the database
  const thomas = await prisma.user.upsert({
    where: { id_user: userId },
    update: {},
    create: {
      id_user: userId,
      email: "thomas.n@compfest.id",
      fullname: "Thomas N",
      phone: "628123456789",
      password: "Admin123",
      role: "Admin",
    },
  });

  // Register user in Supabase
  const { data, error } = await supabase.auth.signUp({
    email: thomas.email,
    password: thomas.password,
    options: {
      data: {
        fullname: thomas.fullname,
        phone: thomas.phone,
        role: thomas.role,
      },
    },
  });

  if (error) {
    console.error("Error signing up user in Supabase:", error);
  } else {
    console.log("User signed up in Supabase:", data.user);
  }

  console.log("User upserted in Prisma:", thomas);
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
