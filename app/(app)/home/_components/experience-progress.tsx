"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HStack } from "@/components/grouped-list";

// 연도별 데이터
const chartData = [
  { year: "2023", performance: 37000 },
  { year: "2024", performance: 44657 },
];

// 차트 설정
const chartConfig = {
  performance: {
    label: "성과",
    color: "black",
  },
} satisfies ChartConfig;

export function ExperienceProgress() {
  return (
    <div className="flex w-full flex-col gap-4">
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
            left: -6,
            right: 0,
          }}
          width={300}
          height={100}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            padding={{
              left: 24,
              right: 24,
            }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="performance"
            type="monotone"
            stroke="var(--color-performance)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-performance)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
              formatter={(value: { toLocaleString: () => string }) =>
                value.toLocaleString()
              }
            />
          </Line>
        </LineChart>
      </ChartContainer>
      <HStack className="text-sm text-muted-foreground">
        작년 대비 35% 증가 <TrendingUp className="h-4 w-4" />
      </HStack>
    </div>
  );
}
