"use client";
import { useRouter } from "next/navigation";

import LoginForm from "@/components/admin/login/login-form";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return (
    <div className="h-full w-full flex bg-background gap-2 items-center justify-center">
      <Spinner color="blue" />
      <span className="text-sm">Loading...</span>
    </div>
  );
}

function AdminLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);

      const session = await authClient.getSession();

      if (session && session.data) {
        router.replace("/admin");
        setIsLoading(false);
      }

      setIsLoading(false);
    };

    init();
  }, [router]);

  if (isLoading)
    return (
      <div className="fixed h-full w-full left-0 top-0">
        <Loading />
      </div>
    );

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-sm space-y-16">
        <h1 className="text-xl font-semibold">Admin login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default AdminLoginPage;
