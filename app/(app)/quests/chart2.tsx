"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
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
import { Container, Wrapper } from "@/components/container";

const monthlyChartData = [
  { month: "April", points: 320, max: 400, median: 250 },
  { month: "May", points: 350, max: 400, median: 250 },
  { month: "June", points: 300, max: 400, median: 250 },
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

export default function JobQuestChartMonth() {
  return (
    <Container>
      <Wrapper className="">
        <Card>
          <CardHeader>
            <CardTitle>직무별 퀘스트 (월간)</CardTitle>
            <CardDescription>최근 3개월 (12주치) 경험치 현황</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="max-h-[300px] w-full"
            >
              <BarChart
                data={monthlyChartData}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                {/* <YAxis
                  ticks={[0, 40, 80]} // 눈금: 0, median, max
                  domain={[0, 80]} // Y축 범위
                  tickLine={false}
                  axisLine={false}
                /> */}
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="points"
                  fill="hsl(var(--chart-1))"
                  radius={[8, 8, 0, 0]}
                >
                  <LabelList
                    dataKey="points"
                    position="top"
                    offset={10}
                    className="fill-foreground font-semibold"
                    formatter={(value) => `${value}점`}
                  />
                </Bar>
                <LabelList
                  dataKey="max"
                  position="top"
                  offset={-10}
                  className="fill-blue-500 font-bold"
                  formatter={(value) => `Max: ${value}`}
                />
                <LabelList
                  dataKey="median"
                  position="top"
                  offset={-30}
                  className="fill-green-500 font-bold"
                  formatter={(value) => `Med: ${value}`}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
          {/* <CardFooter className="flex-col items-start text-sm">
            <p>Max 점수는 푸른색, Median 점수는 녹색으로 표시됩니다.</p>
            <p>경험치는 점수 바 위에 표시됩니다.</p>
          </CardFooter> */}
        </Card>
      </Wrapper>
    </Container>
  );
}
