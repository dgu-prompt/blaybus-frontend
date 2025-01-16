import { Target } from "lucide-react";
import { HStack, ListItem, Section } from "@/components/grouped-list";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchData() {
  const res = await fetch("https://api.example.com/minichart-data");
  if (!res.ok) {
    throw new Error("Failed to fetch chart data");
  }
  return res.json();
}

export function ProjectQuestSection() {
  // data fetch

  // map -> leader-quest-chart component render

  return (
    <Section>
      <ListItem
        href="#"
        title={
          <HStack className="gap-2 text-chart-3">
            <Target className="size-5" />
            <span className="font-medium">전사 프로젝트</span>
          </HStack>
        }
      >
        <HStack className="items-end">
          <span className="text-sm text-muted-foreground">
            참여중인 전사 프로젝트가 없습니다.
          </span>
        </HStack>
      </ListItem>
    </Section>
  );
}
