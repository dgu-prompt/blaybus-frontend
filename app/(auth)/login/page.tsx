import { loginAction } from "./_actions/login";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full max-w-screen-sm flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-xs">
        <LoginForm
          onSubmit={async (formData) => {
            "use server";
            return await loginAction(formData);
          }}
        />
      </div>
    </div>
  );
}
