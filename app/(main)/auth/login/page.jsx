import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { login } from "../action";

function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Login for SEA Salon
          </CardTitle>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter a password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button formAction={login} className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
        <span>
          Don't have account?{" "}
          <Link
            href="/auth/register"
            className="text-blue-400 hover:text-blue-600"
          >
            Register now.
          </Link>
        </span>
      </Card>
    </div>
  );
}

export default page;
