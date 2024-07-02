const { PrismaClient } = require("@prisma/client");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function main() {
  const email = "thomas.n@compfest.id";
  const password = "Admin123";
  const fullname = "Thomas N";
  const phone = "628123456789";
  const role = "Admin";

  // Register user in Supabase
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        fullname: fullname,
        phone: phone,
        role: role,
      },
    },
  });

  console.log(data);

  // Upsert user in the database
  const thomas = await prisma.user.upsert({
    where: { id_user: data.user.id },
    update: {},
    create: {
      id_user: data.user.id,
      email: email,
      fullname: fullname,
      phone: phone,
      password: password,
      role: role,
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
