import { PrismaClient } from "@prisma/client";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function GET(req) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userData = await prisma.user.findFirst({
    where: {
      id_user: user.id,
    },
  });

  return new Response(JSON.stringify(userData), { status: 200 });
}

export async function POST(req) {
  try {
    const { name, userId, totalPrice } = await req.json();

    const reservation = await prisma.reservation.create({
      data: {
        total_price: totalPrice,
        user_id: userId,
        start_time: new Date(),
      },
    });

    return new Response(JSON.stringify(reservation), { status: 200 });
  } catch (error) {
    console.error("Error saving review:", error);
    return new Response("Error saving review", { status: 500 });
  }
}
