"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  ShoppingCart,
  Store,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

type Role = "buyer" | "supplier";

const industries = [
  "Manufacturing",
  "Import & Export",
  "Trading",
  "Logistics",
  "Packaging",
  "Textiles",
  "Construction",
  "Healthcare",
  "Food & Beverage",
  "Other",
];

export default function RegisterForm() {
  const router = useRouter();

  const [role, setRole] = useState<Role>("buyer");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const normalizedEmail = email.trim().toLowerCase();

    if (
      !fullName.trim() ||
      !companyName.trim() ||
      !normalizedEmail ||
      !phone.trim() ||
      !city.trim() ||
      !industry ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      setErrorMessage(
        "Please accept the Terms of Service and Privacy Policy."
      );
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();

      const { data, error } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm`,
          data: {
            full_name: fullName.trim(),
            role,
            company_name: companyName.trim(),
            phone: phone.trim(),
            city: city.trim(),
            industry,
          },
        },
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (!data.user) {
        setErrorMessage(
          "Registration could not be completed. Please try again."
        );
        return;
      }

      setRegistrationComplete(true);
    } catch {
      setErrorMessage(
        "Something went wrong while creating your account. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (registrationComplete) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#F9FAFC] px-4 py-12 sm:px-6">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-200/50 sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={34} />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-[#010F28] sm:text-3xl">
            Check your email
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            We sent a verification link to{" "}
            <span className="font-semibold text-[#010F28]">{email}</span>.
            Verify your email address before logging in to BidNest.
          </p>

          <button
            type="button"
            onClick={() => router.push("/login")}
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#3356F0] px-6 py-3.5 font-semibold text-white transition hover:bg-[#2948D8]"
          >
            Go to login
          </button>

          <p className="mt-5 text-sm text-slate-500">
            The email may take a few minutes to arrive. Check your spam folder
            as well.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F9FAFC] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[#010F28]"
          >
            Bid<span className="text-[#3356F0]">Nest</span>
          </Link>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#010F28] sm:text-4xl">
            Create your BidNest account
          </h1>

          <p className="mt-3 text-slate-600">
            Join a modern B2B platform for buyers and suppliers.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 sm:p-8 lg:p-10"
        >
          <fieldset>
            <legend className="text-sm font-semibold text-[#010F28]">
              Select account type
            </legend>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <RoleCard
                role="buyer"
                selectedRole={role}
                title="Buyer"
                description="Post RFQs and receive quotations from suppliers."
                icon={<ShoppingCart size={22} />}
                onSelect={setRole}
              />

              <RoleCard
                role="supplier"
                selectedRole={role}
                title="Supplier"
                description="Access RFQs and submit quotations to buyers."
                icon={<Store size={22} />}
                onSelect={setRole}
              />
            </div>
          </fieldset>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <FormField
              id="fullName"
              label="Full name"
              value={fullName}
              onChange={setFullName}
              placeholder="Enter your full name"
              autoComplete="name"
            />

            <FormField
              id="companyName"
              label="Company name"
              value={companyName}
              onChange={setCompanyName}
              placeholder="Enter company name"
              autoComplete="organization"
            />

            <FormField
              id="email"
              label="Email address"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="name@company.com"
              autoComplete="email"
            />

            <FormField
              id="phone"
              label="Phone number"
              type="tel"
              value={phone}
              onChange={setPhone}
              placeholder="+92 300 1234567"
              autoComplete="tel"
            />

            <FormField
              id="city"
              label="City"
              value={city}
              onChange={setCity}
              placeholder="e.g. Sialkot"
              autoComplete="address-level2"
            />

            <div>
              <label
                htmlFor="industry"
                className="text-sm font-medium text-[#010F28]"
              >
                Industry
              </label>

              <div className="relative mt-2">
                <Building2
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  id="industry"
                  value={industry}
                  onChange={(event) => setIndustry(event.target.value)}
                  required
                  className="h-12 w-full appearance-none rounded-xl border border-slate-300 bg-white pl-10 pr-4 text-sm text-[#010F28] outline-none transition focus:border-[#3356F0] focus:ring-4 focus:ring-[#3356F0]/10"
                >
                  <option value="">Select industry</option>

                  {industries.map((industryOption) => (
                    <option key={industryOption} value={industryOption}>
                      {industryOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <PasswordField
              id="password"
              label="Password"
              value={password}
              onChange={setPassword}
              showPassword={showPassword}
              onToggleVisibility={() => setShowPassword((current) => !current)}
              autoComplete="new-password"
            />

            <PasswordField
              id="confirmPassword"
              label="Confirm password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              showPassword={showConfirmPassword}
              onToggleVisibility={() =>
                setShowConfirmPassword((current) => !current)
              }
              autoComplete="new-password"
            />
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#3356F0]"
            />

            <span className="text-sm leading-6 text-slate-600">
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-[#3356F0] hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-[#3356F0] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {errorMessage && (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3356F0] px-6 py-3.5 font-semibold text-white transition hover:bg-[#2948D8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading && <Loader2 size={19} className="animate-spin" />}

            {isLoading ? "Creating account..." : "Create account"}
          </button>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#3356F0] hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

function RoleCard({
  role,
  selectedRole,
  title,
  description,
  icon,
  onSelect,
}: {
  role: Role;
  selectedRole: Role;
  title: string;
  description: string;
  icon: React.ReactNode;
  onSelect: (role: Role) => void;
}) {
  const isSelected = selectedRole === role;

  return (
    <button
      type="button"
      onClick={() => onSelect(role)}
      aria-pressed={isSelected}
      className={`rounded-2xl border p-5 text-left transition ${
        isSelected
          ? "border-[#3356F0] bg-[#3356F0]/5 ring-4 ring-[#3356F0]/10"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          isSelected
            ? "bg-[#3356F0] text-white"
            : "bg-slate-100 text-[#010F28]"
        }`}
      >
        {icon}
      </div>

      <p className="mt-4 font-semibold text-[#010F28]">{title}</p>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </button>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#010F28]">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#010F28] outline-none transition placeholder:text-slate-400 focus:border-[#3356F0] focus:ring-4 focus:ring-[#3356F0]/10"
      />
    </div>
  );
}

function PasswordField({
  id,
  label,
  value,
  onChange,
  showPassword,
  onToggleVisibility,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onToggleVisibility: () => void;
  autoComplete: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#010F28]">
        {label}
      </label>

      <div className="relative mt-2">
        <input
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          required
          minLength={8}
          className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 pr-12 text-sm text-[#010F28] outline-none transition placeholder:text-slate-400 focus:border-[#3356F0] focus:ring-4 focus:ring-[#3356F0]/10"
        />

        <button
          type="button"
          onClick={onToggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-[#010F28]"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
        </button>
      </div>
    </div>
  );
}