import AuthLayout from "@/components/layout/AuthLayout";
import UpdatePasswordForm from "@/components/auth/UpdatePasswordForm";

export default function UpdatePasswordPage() {
  return (
    <AuthLayout actionLabel="Log In" actionHref="/login">
      <UpdatePasswordForm />
    </AuthLayout>
  );
}