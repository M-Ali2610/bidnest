"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function UpdatePasswordForm() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setErrorMessage(
          "Your reset session has expired. Please request another reset link."
        );
        return;
      }

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setPasswordUpdated(true);

      await supabase.auth.signOut();

      setTimeout(() => {
        router.replace("/login?passwordUpdated=true");
      }, 1500);
    } catch {
      setErrorMessage(
        "Something went wrong while updating your password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (passwordUpdated) {
    return (
      <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#F9FAFC] px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/40">
          <CheckCircle2
            size={48}
            className="mx-auto text-emerald-600"
          />

          <h1 className="mt-5 text-2xl font-bold text-[#010F28]">
            Password updated
          </h1>

          <p className="mt-3 text-slate-600">
            Your password was changed successfully. Redirecting you to login…
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#F9FAFC] px-4 py-12 sm:px-6">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#010F28] sm:text-4xl">
            Create a new password
          </h1>

          <p className="mt-3 text-slate-600">
            Choose a secure password for your BidNest account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8"
        >
          <PasswordInput
            id="password"
            label="New password"
            value={password}
            onChange={setPassword}
            visible={showPassword}
            onToggle={() => setShowPassword((current) => !current)}
          />

          <div className="mt-5">
            <PasswordInput
              id="confirmPassword"
              label="Confirm new password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              visible={showConfirmPassword}
              onToggle={() =>
                setShowConfirmPassword((current) => !current)
              }
            />
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
            {isLoading ? "Updating password..." : "Update password"}
          </button>
        </form>
      </div>
    </section>
  );
}

function PasswordInput({
  id,
  label,
  value,
  onChange,
  visible,
  onToggle,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#010F28]">
        {label}
      </label>

      <div className="relative mt-2">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          minLength={8}
          required
          autoComplete="new-password"
          className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 pr-12 text-sm text-[#010F28] outline-none transition focus:border-[#3356F0] focus:ring-4 focus:ring-[#3356F0]/10"
        />

        <button
          type="button"
          onClick={onToggle}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-[#010F28]"
        >
          {visible ? <EyeOff size={19} /> : <Eye size={19} />}
        </button>
      </div>
    </div>
  );
}