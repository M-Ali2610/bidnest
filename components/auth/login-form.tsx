"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

type UserRole = "buyer" | "supplier";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isVerified = searchParams.get("verified") === "true";
  const verificationFailed =
    searchParams.get("error") === "verification_failed";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setErrorMessage("Please enter your email address and password.");
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();

      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });

      if (authError) {
        setErrorMessage(getFriendlyAuthError(authError.message));
        return;
      }

      if (!authData.user) {
        setErrorMessage("Unable to sign in. Please try again.");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", authData.user.id)
        .single();

      if (profileError || !profile) {
        await supabase.auth.signOut();

        setErrorMessage(
          "Your account profile could not be found. Please contact support."
        );
        return;
      }

      const role = profile.role as UserRole;

      if (role === "supplier") {
        router.replace("/supplier/dashboard");
      } else {
        router.replace("/dashboard");
      }

      router.refresh();
    } catch {
      setErrorMessage(
        "Something went wrong while signing you in. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#F9FAFC] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#010F28] sm:text-4xl">
            Welcome back
          </h1>

          <p className="mt-3 text-slate-600">
            Log in to continue to your BidNest account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8"
        >
          {isVerified && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
            >
              <CheckCircle2 size={19} className="mt-0.5 shrink-0" />

              <p>
                Your email has been verified successfully. You can now log in.
              </p>
            </div>
          )}

          {verificationFailed && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle size={19} className="mt-0.5 shrink-0" />

              <p>
                Email verification failed or the link has expired. Please try
                again.
              </p>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#010F28]"
            >
              Email address
            </label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@company.com"
                autoComplete="email"
                required
                className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 text-sm text-[#010F28] outline-none transition placeholder:text-slate-400 focus:border-[#3356F0] focus:ring-4 focus:ring-[#3356F0]/10"
              />
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#010F28]"
              >
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#3356F0] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
                className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-10 pr-12 text-sm text-[#010F28] outline-none transition focus:border-[#3356F0] focus:ring-4 focus:ring-[#3356F0]/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-[#010F28]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle size={19} className="mt-0.5 shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3356F0] px-6 py-3.5 font-semibold text-white transition hover:bg-[#2948D8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading && <Loader2 size={19} className="animate-spin" />}

            {isLoading ? "Logging in..." : "Log in"}
          </button>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#3356F0] hover:underline"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

function getFriendlyAuthError(message: string) {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("email not confirmed")) {
    return "Please verify your email address before logging in.";
  }

  if (normalizedMessage.includes("invalid login credentials")) {
    return "The email address or password you entered is incorrect.";
  }

  if (normalizedMessage.includes("too many requests")) {
    return "Too many login attempts. Please wait a moment and try again.";
  }

  return message;
}