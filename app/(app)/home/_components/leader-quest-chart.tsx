"use client";

import { Bar, BarChart } from "recharts";
import { useIsClient } from "@/hooks/use-is-client";

export function LeaderQuestChart({
  data,
}: {
  data: { month: number; expDo: number; fill?: string }[];
}) {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <BarChart
      width={96}
      height={48}
      data={data}
      barCategoryGap="10%"
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <Bar
        dataKey="expDo"
        radius={[4, 4, 0, 0]}
        fill="hsl(var(--border))"
        background={{ fill: "transparent" }}
      />
    </BarChart>
  );
}
