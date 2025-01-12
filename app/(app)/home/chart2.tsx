"use client";

import { RadialBar, RadialBarChart, PolarRadiusAxis, Label } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container, Wrapper } from "@/components/container";

import { TrendingUp } from "lucide-react";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];
const chartData = [{ name: "YearlyExp", prev: 5000, current: 7657 }];
const totalRequired = 13500; // 다음 레벨까지 필요한 총 경험치

const chartConfig = {
  prev: {
    label: "Prev",
    color: "hsl(var(--chart-1))",
  },
  current: {
    label: "Current",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function ExperienceProgress() {
  return (
    <Container>
      <Wrapper className="">
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Radial Chart - Stacked</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 items-center pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square w-full max-w-[250px]"
            >
              <RadialBarChart
                data={chartData}
                startAngle={90}
                endAngle={
                  -360 *
                    ((chartData[0].current + chartData[0].prev) /
                      totalRequired) +
                  90
                }
                innerRadius={80}
                outerRadius={130}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                              className="fill-foreground text-4xl font-bold"
                            >
                              vv
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Visitors
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="prev"
                  stackId="a"
                  cornerRadius={5}
                  fill="var(--color-prev)"
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="current"
                  fill="var(--color-current)"
                  stackId="a"
                  cornerRadius={5}
                  className="stroke-transparent stroke-2"
                />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-semibold leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </Wrapper>
    </Container>
  );
}
