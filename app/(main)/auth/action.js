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

  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword(data);

  console.log(user);

  const userInfo = await prisma.user.findFirst({
    where: {
      id_user: user.id,
    },
  });

  console.log(userInfo);

  if (error) {
    redirect("/error");
  }

  if (userInfo.role === "Admin") {
    redirect("/admin");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const supabase = createClient();

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

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp(data);
  console.log(user);

  await prisma.user.create({
    data: {
      id_user: user.id,
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
