"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validators/auth";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ColorRing } from "react-loader-spinner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import GoogleSignInButton from "../../../components/google-button";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values) {
    setLoading(true);
    // signIn("credentials", {
    //   ...values,
    //   redirect: true,
    //   callbackUrl: callbackUrl ? callbackUrl : "",
    // }).then((data) => {
    //   setLoading(false);
    // });
  }
  return (
    <div className="w-full max-w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="">
        <CardHeader className="text-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Sign in to your account and get your tasks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Email..."
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="******" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size="sm"
                className="w-full inline-flex gap-x-1"
                type="submit"
              >
                <span>Submit</span>
                <ColorRing
                  visible={loading}
                  height="25"
                  width="25"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                />
              </Button>
              <div className="w-full flex justify-center">
                <Button variant={"link"}>Forgotten Password?</Button>
              </div>
            </form>
          </Form>
          <div className="my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <GoogleSignInButton />
        </CardContent>
        <CardFooter className="mt-8 flex items-end">
          <CardDescription className="w-full flex items-center justify-center gap-x-2">
            <span>Don't have an account yet? </span>
            <Link className="font-semibold" href={"/signup"}>
              Sign Up
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};
export default SignIn;
