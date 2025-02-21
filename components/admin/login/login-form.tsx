"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email().default(""),
  password: z.string().min(6).default(""),
  rememberMe: z.boolean().default(false),
});

const AlertIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fafafa"}
    fill={"none"}
    {...props}
  >
    <path
      d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M11.992 16H12.001"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13L12 8.99997"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ViewIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fafafa"}
    fill={"none"}
    {...props}
  >
    <path
      d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const ViewOffIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#fafafa"}
    fill={"none"}
    {...props}
  >
    <path
      d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 13.5L16.5 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 11L22 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 13L4 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13.5L7.5 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function LoginForm() {
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState<boolean | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    disabled: isPending,
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    setIsPending(true);
    const { email, password, rememberMe } = values;

    await authClient.signIn.email(
      {
        email,
        password,
        rememberMe,
        callbackURL: "/admin",
      },
      {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          setIsPending(false);

          toast("Success", { description: "Signed in successfuly" });
          router.replace("/admin");
        },
        onError: (ctx) => {
          setIsPending(false);
          if (ctx.error.status === 403) {
            setError(
              `403 Forbidden error: ${ctx.error?.message ?? " Unauthorized"}`
            );
          } else {
            setError(
              ctx?.error?.message ?? "Authentication failed, please try again"
            );
          }
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  className="text-base"
                  {...field}
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
              <div className="flex items-center">
                <FormLabel className="font-medium flex-1">Password</FormLabel>
              </div>
              <FormControl>
                <div className="relative flex items-center">
                  <Input
                    className="text-base"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...field}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-0 absolute h-full w-12 shrink-0 top-0 right-0 rounded-l-none"
                    type="button"
                    disabled={isPending}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword && (
                      <ViewOffIcon className="h-4 w-4 text-icon" />
                    )}
                    {!showPassword && (
                      <ViewIcon className="h-4 w-4 text-icon" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="space-y-2 w-full">
          {error && (
            <div className="flex space-x-2 rounded-lg bg-red-100 border-2 border-red-400 py-2 px-3 ">
              <AlertIcon className="h-4 w-4 text-red-400" />
              <p className="text-[12.6px] font-semibold text-red-500 ">
                {error}
              </p>
            </div>
          )}
          <Button type="submit" className="w-full relative">
            {isPending && (
              <div className="absolute left-2">
                <Spinner />
              </div>
            )}
            <span>Sign in with Email</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}

LoginForm.displayName = "SignInForm";

export default LoginForm;
