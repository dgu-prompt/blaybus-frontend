"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Container, Wrapper } from "@/components/container";

// 데이터: 김민수 월특근 리더 부여 퀘스트
const monthlyChartData = [
  { month: "April", points: 50, max: 100, median: 50 },
  { month: "May", points: 50, max: 100, median: 50 },
  { month: "June", points: 100, max: 100, median: 50 },
];

const chartConfig = {
  leaderQuest: {
    label: "리더 부여 퀘스트",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export default function LeaderQuestChartMonth() {
  return (
    <Container>
      <Wrapper>
        <Card>
          <CardHeader>
            <CardTitle>월특근 - 리더 부여 퀘스트 (월간)</CardTitle>
            <CardDescription>최근 3개월 경험치 현황</CardDescription>
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
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="points"
                  fill="hsl(var(--chart-4))"
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
