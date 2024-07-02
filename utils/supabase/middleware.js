import { authPaths, protectedPaths } from "@/lib/constants";
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const url = new URL(request.url);
  const next = url.searchParams.get("next");
  if (!user) {
    if (protectedPaths.includes(url.pathname)) {
      return NextResponse.redirect(
        new URL("/auth/login?next=" + (next || url.pathname), request.url)
      );
    }
    return response;
  } else {
    if (authPaths.includes(url.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return response;
  }
}
