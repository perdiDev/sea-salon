// app/actions/review.js
"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitReview(name, rate, comment) {
  try {
    const review = await prisma.review.create({
      data: {
        name,
        rate,
        comment,
        created: new Date(),
      },
    });
    console.log(review);
    return review;
  } catch (error) {
    console.error("Error saving review:", error);
    throw new Error("Error saving review");
  }
}
