"use client";

import { usePathname } from "next/navigation";
import { Tab } from "./tab";
import { Container, Wrapper } from "./container";
import { Bell, Home, User, Wrench } from "lucide-react";
import { useIsClient } from "@/hooks/use-is-client";

const tabs = [
  { title: "홈", href: "/home", icon: Home },
  { title: "알림", href: "/notifications", icon: Bell },
  { title: "나", href: "/you", icon: User },
  { title: "관리자", href: "/admin", icon: Wrench },
];

function TabBarMenu({ isAdmin }: { isAdmin: boolean }) {
  const isClient = useIsClient();
  const pathname = usePathname();

  const filteredTabs = isAdmin
    ? tabs
    : tabs.filter((tab) => tab.title !== "관리자");

  if (!isClient) return null;

  return filteredTabs.map((tab, index) => (
    <Tab
      key={index}
      icon={tab.icon}
      title={tab.title}
      href={tab.href}
      active={pathname.startsWith(tab.href)}
    />
  ));
}

export function TabBar({ isAdmin }: { isAdmin: boolean }) {
  return (
    <>
      <div className="grow" />
      <Container className="pb-safe translucent sticky bottom-0 z-50 border-t bg-background/50">
        <Wrapper className="h-12 flex-row items-center">
          <TabBarMenu isAdmin={isAdmin} />
        </Wrapper>
      </Container>
    </>
  );
}
