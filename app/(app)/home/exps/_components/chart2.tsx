"use client";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 연도별 데이터
const chartData = [
  { year: "2023", performance: 37000 },
  { year: "2024", performance: 44657 },
];

// 차트 설정
const chartConfig = {
  performance: {
    label: "성과",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ExperienceProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>작년 대비 나의 성장</CardTitle>
        <CardDescription>2023년 vs 2024년</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: -6,
              right: 0,
            }}
            width={500}
            height={300}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{
                left: 16,
                right: 24,
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.toLocaleString()}
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
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          작년 대비 35% 증가 <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          2023년과 2024년의 경험치 비교를 보여줍니다.
        </div>
      </CardFooter>
    </Card>
  );
}
