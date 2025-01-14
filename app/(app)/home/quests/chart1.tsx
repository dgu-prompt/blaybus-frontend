// 최근 4주 (주별)
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

const chartData = [
  { week: "Week 24", points: 80, max: 80, median: 40 },
  { week: "Week 25", points: 40, max: 80, median: 40 },
  { week: "Week 26", points: 80, max: 80, median: 40 },
  { week: "Week 27", points: 80, max: 80, median: 40 },
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

export default function JobQuestChart() {
  return (
    <Container>
      <Wrapper className="">
        <Card>
          <CardHeader>
            <CardTitle>직무별 퀘스트 (주별)</CardTitle>
            <CardDescription>최근 4주치 경험치 현황</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="max-h-[250px] w-full"
            >
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="week" tickLine={false} axisLine={false} />
                {/* <YAxis
                  tickLine={true}
                  axisLine={false}
                  ticks={[0, 40, 80]} // 눈금: 0, median, max
                  domain={[0, 80]} // Y축 범위
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
