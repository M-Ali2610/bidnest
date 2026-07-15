import AuthLayout from "@/components/layout/AuthLayout";
import RegisterForm from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout
      actionLabel="Log In"
      actionHref="/login"
    >
      <RegisterForm />
    </AuthLayout>
  );
}