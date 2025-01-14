import { Briefcase } from "lucide-react";
import { HStack, ListItem, Section } from "@/components/grouped-list";
import { JobQuestChart } from "./job-quest-chart";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchData() {
  const res = await fetch("https://api.example.com/minichart-data");
  if (!res.ok) {
    throw new Error("Failed to fetch chart data");
  }
  return res.json();
}

export function JobQuestSection() {
  // data fetch
  const data = [
    { week: 1, expDo: 80 },
    { week: 2, expDo: 60 },
    { week: 3, expDo: 70 },
    { week: 4, expDo: 90 },
    { week: 5, expDo: 80, fill: "hsl(var(--chart-1))" },
  ];

  // map -> leader-quest-chart component render

  return (
    <Section>
      <ListItem
        href="#"
        title={
          <HStack className="gap-2 text-chart-1">
            <Briefcase className="size-5" />
            <span className="font-medium">직무 퀘스트</span>
          </HStack>
        }
        detail="27주차"
      >
        <HStack className="items-end">
          <span className="mr-auto">
            <span className="text-2xl font-semibold">80</span>
            <span className="text-base"> do</span>
          </span>
          <div className="h-12 w-24">
            <JobQuestChart data={data} />
          </div>
        </HStack>
      </ListItem>
    </Section>
  );
}
