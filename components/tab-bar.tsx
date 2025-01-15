import Link from "next/link";
import { Home, Bell, User, Wrench } from "lucide-react";
import { Container, Wrapper } from "./container";
import { cn } from "@/lib/utils";

const tabs = [
  { title: "홈", href: "/home", icon: Home },
  { title: "알림", href: "/notifications", icon: Bell },
  { title: "나", href: "/you", icon: User },
  { title: "관리자", href: "/admin", icon: Wrench, active: true },
];

function Tab({
  title,
  href,
  icon: Icon,
  active,
}: {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={cn(
          `flex flex-col items-center gap-1 text-muted-foreground ${active && "text-foreground"}`,
        )}
      >
        <Icon className="h-5 w-5" />
        <span className="text-xs">{title}</span>
      </div>
    </Link>
  );
}

export function TabBar() {
  return (
    <>
      <div className="grow" />
      <Container className="pb-safe translucent sticky bottom-0 z-50 border-t bg-background/50">
        <Wrapper className="h-12">
          <div className="grid h-full w-full grid-cols-4 items-center">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                icon={tab.icon}
                title={tab.title}
                href={tab.href}
                active={tab.active || false}
              />
            ))}
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
