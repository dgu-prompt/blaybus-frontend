import { LoginForm } from "./_components/login-form";
import { handleLoginAction } from "./_actions/login";
import { Container, Wrapper } from "@/components/container";

export default function LoginPage() {
  return (
    <Container className="h-dvh justify-center">
      <Wrapper className="px-safe-or-4">
        <LoginForm onSubmit={handleLoginAction} />
      </Wrapper>
    </Container>
  );
}
