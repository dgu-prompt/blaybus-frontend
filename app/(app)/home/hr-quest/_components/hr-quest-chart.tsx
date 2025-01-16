"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useIsClient } from "@/hooks/use-is-client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  상반기_인사평가: {
    label: "상반기 인사평가",
    color: "hsl(var(--chart-1))",
  },
  하반기_인사평가: {
    label: "하반기 인사평가",
    color: "hsl(var(--chart-2))",
  },
  직무별_퀘스트: {
    label: "직무별 퀘스트",
    color: "hsl(var(--chart-3))",
  },
  리더부여_퀘스트: {
    label: "리더부여 퀘스트",
    color: "hsl(var(--chart-4))",
  },
  전사_프로젝트: {
    label: "전사 프로젝트",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function HRQuestChart({
  data,
}: {
  data: { period: string; expDo: number; fill?: string }[];
}) {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <ChartContainer config={chartConfig} className="max-h-[250px] w-full">
      <BarChart
        data={data}
        barCategoryGap="20%"
        margin={{ top: 12, right: -20, left: -12, bottom: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="period" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} orientation="right" />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="expDo"
          radius={[8, 8, 0, 0]}
          fill="hsl(var(--border))"
          background={{ fill: "transparent" }}
        />
      </BarChart>
    </ChartContainer>
  );
}
