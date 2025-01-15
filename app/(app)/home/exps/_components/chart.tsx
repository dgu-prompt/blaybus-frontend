"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
import { Container, Wrapper } from "@/components/container";

const chartData = [
  { category: "상반기 인사평가", points: 1500, fill: "hsl(var(--chart-1))" },
  { category: "하반기 인사평가", points: 3000, fill: "hsl(var(--chart-2))" },
  { category: "직무별 퀘스트", points: 2640, fill: "hsl(var(--chart-3))" },
  { category: "리더부여 퀘스트", points: 517, fill: "hsl(var(--chart-4))" },
  { category: "전사 프로젝트", points: 0, fill: "hsl(var(--chart-5))" },
];

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

export function ExperienceChart() {
  const totalPoints = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.points, 0);
  }, []);

  return (
    <Container>
      <Wrapper className="">
        <Card className="flex w-full flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>2024년 경험치 현황</CardTitle>
            <CardDescription>현재 경험치 구성</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="points"
                  nameKey="category"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalPoints.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              총 경험치
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-semibold leading-none">
              경험치가 5.2% 증가했습니다! <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              2024년 현재 경험치 상태
            </div>
          </CardFooter>
        </Card>
      </Wrapper>
    </Container>
  );
}
