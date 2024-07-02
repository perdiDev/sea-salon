"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function login(formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const supabase = createClient();
  console.log("Masuk");

  const email = formData.get("email");
  const password = formData.get("password");
  const fullname = formData.get("fullname");
  const phone = formData.get("phone");

  const data = {
    email: email,
    password: password,
    options: {
      data: {
        fullname: fullname,
        phone: phone,
      },
    },
  };
  console.log("Mulai");

  const { error } = await supabase.auth.signUp(data);
  console.log("Setelah signUp");

  await prisma.user.create({
    data: {
      fullname,
      email,
      password,
      fullname,
      phone,
    },
  });

  console.log("Finish");

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
