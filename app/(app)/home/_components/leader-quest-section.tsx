import { HandHeart } from "lucide-react";
import { HStack, ListItem, Section } from "@/components/grouped-list";
import { LeaderQuestChart } from "./leader-quest-chart";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchData() {
  const res = await fetch("https://api.example.com/minichart-data");
  if (!res.ok) {
    throw new Error("Failed to fetch chart data");
  }
  return res.json();
}

export function LeaderQuestSection() {
  // data fetch
  const data = [
    {
      title: "월 특근 퀘스트",
      detail: "4월",
      data: [
        { month: 1, expDo: 100 },
        { month: 2, expDo: 1 },
        { month: 3, expDo: 1 },
        { month: 4, expDo: 50, fill: "hsl(var(--chart-2))" },
      ],
    },
    {
      title: "업무 개선 퀘스트",
      detail: "4월",
      data: [
        { month: 1, expDo: 1 },
        { month: 2, expDo: 67 },
        { month: 3, expDo: 1 },
        { month: 4, expDo: 1, fill: "hsl(var(--chart-2))" },
      ],
    },
  ];

  // map -> leader-quest-chart component render

  return (
    <Section>
      {data.map((quest) => (
        <ListItem
          key={quest.title}
          href="#"
          title={
            <HStack className="gap-2 text-chart-2">
              <HandHeart className="size-5" />
              <span className="font-medium">{quest.title}</span>
            </HStack>
          }
          detail={quest.detail}
        >
          <HStack className="items-end">
            <span className="mr-auto">
              <span className="text-2xl font-semibold">
                {quest.data[quest.data.length - 1].expDo}
              </span>
              <span className="text-base"> do</span>
            </span>
            <div className="h-12 w-24">
              <LeaderQuestChart data={quest.data} />
            </div>
          </HStack>
        </ListItem>
      ))}
    </Section>
  );
}
