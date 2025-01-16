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
    <Container className="pt-safe translucent sticky top-0 z-50 border-b bg-background/50">
      <Wrapper className="h-11">
        <div className="px-safe-or-4 flex h-full items-center gap-4">
          <div className="flex w-5 justify-start">
            {!noBackButton && <BackButton />}
          </div>
          <div className="grow overflow-hidden text-ellipsis whitespace-pre text-center font-semibold">
            {title}
          </div>
          <div className="flex w-5 justify-end">{actionButton}</div>
        </div>
      </Wrapper>
    </Container>
  );
}

// overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: pre;  --> 한 줄로 표현하고 싶다면 nowrap을 사용하면 된다.
