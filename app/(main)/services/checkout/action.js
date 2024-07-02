// app/actions/review.js
"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitCheckout(name) {
  try {
    const review = await prisma.reservation.create({
      data: {
        startTime: new Date(),
      },
    });
    console.log(review);
    return review;
  } catch (error) {
    console.error("Error saving review:", error);
    throw new Error("Error saving review");
  }
}
