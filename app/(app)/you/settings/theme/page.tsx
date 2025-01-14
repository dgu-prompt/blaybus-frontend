"use client";

import { useTheme } from "next-themes";
import { Check } from "lucide-react";
import { List, ListButton, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";
import { useIsClient } from "@/hooks/use-is-client";

export default function Page() {
  const isClient = useIsClient();
  const { theme, setTheme } = useTheme();

  if (!isClient) return null;

  return (
    <>
      <NavigationBar title="앱 테마" />
      <List>
        <Section>
          <ListButton
            title="라이트"
            detail={theme == "light" ? <Check className="size-5" /> : <span />}
            onClick={() => setTheme("light")}
          />
          <ListButton
            title="다크"
            detail={theme == "dark" ? <Check className="size-5" /> : <span />}
            onClick={() => setTheme("dark")}
          />
          <ListButton
            title="시스템"
            detail={theme == "system" ? <Check className="size-5" /> : <span />}
            onClick={() => setTheme("system")}
          />
        </Section>
      </List>
    </>
  );
}
