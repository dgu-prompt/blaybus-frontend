"use client";

import { useState } from "react";
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
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, ListItem, Section } from "@/components/list";
import { Container, Wrapper } from "@/components/container";
import { NavigationBar } from "@/components/navigation-bar";

const chartData = {
  "4주": [
    { week: "Week 24", points: 80, max: 80, median: 40 },
    { week: "Week 25", points: 40, max: 80, median: 40 },
    { week: "Week 26", points: 80, max: 80, median: 40 },
    { week: "Week 27", points: 80, max: 80, median: 40 },
  ],
  "3개월": [
    { month: "April", points: 320, max: 400, median: 250 },
    { month: "May", points: 350, max: 400, median: 250 },
    { month: "June", points: 300, max: 400, median: 250 },
  ],
  "6개월": [
    { month: "January", points: 400, max: 450, median: 300 },
    { month: "February", points: 360, max: 450, median: 300 },
    { month: "March", points: 380, max: 450, median: 300 },
    { month: "April", points: 320, max: 450, median: 300 },
    { month: "May", points: 350, max: 450, median: 300 },
    { month: "June", points: 300, max: 450, median: 300 },
  ],
  "1년": [
    { quarter: "Q1", points: 1140, max: 1200, median: 900 },
    { quarter: "Q2", points: 970, max: 1200, median: 900 },
    { quarter: "Q3", points: 1100, max: 1200, median: 900 },
    { quarter: "Q4", points: 950, max: 1200, median: 900 },
  ],
};

const sampleList = [
  { week: "Week 24", points: 80, detail: "Max achieved" },
  { week: "Week 25", points: 40, detail: "Median achieved" },
  { week: "Week 26", points: 80, detail: "Max achieved" },
  { week: "Week 27", points: 80, detail: "Max achieved" },
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

export default function JobQuestDetails() {
  const [activeTab, setActiveTab] = useState<"4주" | "3개월" | "6개월" | "1년">(
    "4주",
  );

  return (
    <>
      <NavigationBar title="직무별 퀘스트" />
      <List className="gap-4 p-4">
        <Section>
          <CardHeader>
            <CardTitle>직무별 퀘스트</CardTitle>
            <CardDescription>{activeTab} 데이터 시각화</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="4주">4주</TabsTrigger>
                <TabsTrigger value="3개월">3개월</TabsTrigger>
                <TabsTrigger value="6개월">6개월</TabsTrigger>
                <TabsTrigger value="1년">1년</TabsTrigger>
              </TabsList>
              {Object.entries(chartData).map(([tab, data]) => (
                <TabsContent key={tab} value={tab}>
                  <ChartContainer
                    config={chartConfig}
                    className="max-h-[300px] w-full"
                  >
                    <BarChart data={data}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey={
                          tab === "1년"
                            ? "quarter"
                            : tab === "3개월"
                              ? "month"
                              : "week"
                        }
                        tickLine={false}
                        axisLine={false}
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
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
          {/* <CardFooter className="text-sm">
            Max 점수는 파란색, Median 점수는 녹색으로 표시됩니다.
          </CardFooter> */}
        </Section>
        <Section header="경험치 현황 목록" footer=" ">
          {sampleList.map((item, index) => (
            <ListItem key={index}>
              <div className="flex justify-between">
                <span>{item.week}</span>
                <span>{item.points}점</span>
              </div>
              <div className="text-sm text-muted-foreground">{item.detail}</div>
            </ListItem>
          ))}
        </Section>
      </List>
    </>
  );
}
