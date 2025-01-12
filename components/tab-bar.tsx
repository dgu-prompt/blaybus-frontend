import Link from "next/link";
import { Home, Trophy, Bell, Settings, User } from "lucide-react";
import { Container, Wrapper } from "./container";

const tabs = [
  { title: "홈", href: "/home", icon: Home },
  { title: "알림", href: "/notifications", icon: Bell },
  { title: "나", href: "/you", icon: User },
];

function Tab({
  title,
  href,
  icon: Icon,
}: {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-1">
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
      <Container className="pb-safe sticky bottom-0 z-50 border-t bg-background/75 backdrop-blur">
        <Wrapper className="h-12">
          <div className="grid h-full w-full grid-cols-3 items-center text-foreground">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                icon={tab.icon}
                title={tab.title}
                href={tab.href}
              />
            ))}
          </div>
        </Wrapper>
      </Container>
    </>
  );
}
