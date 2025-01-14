import { LoginForm } from "./_components/login-form";
import { handleLoginAction } from "./_actions/login";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm onSubmit={handleLoginAction} />
    </div>
  );
}
