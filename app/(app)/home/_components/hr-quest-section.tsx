import { ChartCandlestick } from "lucide-react";
import { HStack, ListItem, Section } from "@/components/grouped-list";
import { HRQuestChart } from "./hr-quest-chart";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchData() {
  const res = await fetch("https://api.example.com/minichart-data");
  if (!res.ok) {
    throw new Error("Failed to fetch chart data");
  }
  return res.json();
}

export function HRQuestSection() {
  // data fetch
  const data = [
    { bangi: "상반기", d: 1500, c: 1500, b: 1500, a: 1500, s: 1500 },
  ];

  // map -> leader-quest-chart component render

  return (
    <Section>
      <ListItem
        href="#"
        title={
          <HStack className="gap-2 text-chart-4">
            <ChartCandlestick className="size-5" />
            <span className="font-medium">인사평가</span>
          </HStack>
        }
        detail={<span className="text-sm">상반기</span>}
      >
        <HStack className="items-end">
          <span className="mr-auto">
            <span className="text-2xl font-semibold">1500</span>
            <span className="text-base"> do</span>
          </span>
          <div className="h-12 w-24">
            <HRQuestChart data={data} />
          </div>
        </HStack>
      </ListItem>
    </Section>
  );
}
