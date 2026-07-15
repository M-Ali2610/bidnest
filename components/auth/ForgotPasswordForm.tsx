"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, CheckCircle2, Loader2, Mail } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.resetPasswordForEmail(
        normalizedEmail,
        {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        }
      );

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setEmailSent(true);
    } catch {
      setErrorMessage(
        "Something went wrong while sending the reset email. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (emailSent) {
    return (
      <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#F9FAFC] px-4 py-12 sm:px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-200/40 sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={34} />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-[#010F28]">
            Check your email
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            We sent password-reset instructions to{" "}
            <span className="font-semibold text-[#010F28]">{email}</span>.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex items-center justify-center gap-2 font-semibold text-[#3356F0] hover:underline"
          >
            <ArrowLeft size={17} />
            Back to login
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#F9FAFC] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#010F28] sm:text-4xl">
            Forgot your password?
          </h1>

          <p className="mt-3 text-slate-600">
            Enter your email and we will send you a password-reset link.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8"
        >
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

          {errorMessage && (
            <div
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
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
            {isLoading ? "Sending reset link..." : "Send reset link"}
          </button>

          <Link
            href="/login"
            className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#3356F0] hover:underline"
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>
        </form>
      </div>
    </section>
  );
}