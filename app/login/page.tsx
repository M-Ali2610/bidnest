import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <AuthLayout actionLabel="Register" actionHref="/register">
      <LoginForm />
    </AuthLayout>
  );
}