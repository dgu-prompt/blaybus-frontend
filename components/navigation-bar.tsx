"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Wrapper } from "./container";

function BackButton() {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <button onClick={handleClick} className="-m-3 p-3">
      <ArrowLeft className="h-5 w-5" />
    </button>
  );
}

export function NavigationBar({
  title,
  noBackButton = false,
  actionButton,
}: {
  title: string;
  noBackButton?: boolean;
  actionButton?: React.ReactNode;
}) {
  return (
    <Container className="pt-safe translucent sticky top-0 z-50 border-b">
      <Wrapper className="h-11">
        <div className="px-safe-or-4 grid h-full grid-cols-3 items-center">
          <div className="flex justify-start">
            {!noBackButton && <BackButton />}
          </div>
          <div className="text-center font-semibold">{title}</div>
          <div className="flex justify-end">{actionButton}</div>
        </div>
      </Wrapper>
    </Container>
  );
}
