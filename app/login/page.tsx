import { Suspense } from "react";

import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "@/components/auth/login-form";

function LoginFormFallback() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#F9FAFC] px-4 py-12">
      <div className="h-105 w-full max-w-md animate-pulse rounded-3xl border border-slate-200 bg-white" />
    </section>
  );
}

export default function LoginPage() {
  return (
    <AuthLayout actionLabel="Register" actionHref="/register">
      <Suspense fallback={<LoginFormFallback />}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}