"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { NavigationBar } from "@/components/navigation-bar";
import { Container, Wrapper } from "@/components/container";
import { List, ListItem } from "@/components/list";
import JobQuestChart from "./chart1";
import JobQuestChartMonth from "./chart2";
import LeaderQuestChart from "./chart3";
import LeaderQuestChartMonth from "./chart4";
import Link from "next/link";
import MiniChart from "./minichart";
import MiniChartLeader from "./minichart-leader";
import MiniChartLeader2 from "./minichart-leader2";
import MiniChartLeadertf from "./minichart-tf";
import MiniChartLeaderhr from "./minichart-hr";

const quests = [
  { name: "팀 생산성 목표 달성", progress: 80, max: 100, medium: 50 },
  { name: "월 특근 2회 달성", progress: 50, max: 100, medium: 30 },
];

const jobQuests = [
  {
    name: "팀 생산성 목표 달성",
    progress: 80,
    max: 100,
    medium: 70,
    unit: "매출/인건비",
  },
  {
    name: "팀 목표 달성",
    progress: 90,
    max: 100,
    medium: 75,
    unit: "프로젝트 완료율",
  },
];

const leaderQuests = [
  {
    name: "월 특근 2회 달성",
    progress: 50,
    max: 100,
    medium: 30,
  },
  {
    name: "업무 프로세스 개선",
    progress: 70,
    max: 100,
    medium: 50,
  },
];

export default function QuestsPage() {
  return (
    <>
      <NavigationBar title="퀘스트" noBackButton />
      <List>
        <MiniChart />
        <MiniChartLeader />
        <MiniChartLeader2 />
        <MiniChartLeadertf />
        <MiniChartLeaderhr />
      </List>
      <List className="gap-4 p-4">
        <Link href="/quests/q">
          <JobQuestChart />
        </Link>
        <ListItem href="/quests/q" className="items-start border-none">
          <JobQuestChart />
        </ListItem>

        <ListItem href="/quests/q" className="w-full">
          <div className="flex w-full flex-col">
            <div className="flex w-full justify-between">
              <span>직무별 퀘스트</span>
              <span className="">2024년 1주차</span>
            </div>
            <JobQuestChart />
          </div>
        </ListItem>
        <JobQuestChartMonth />
        <LeaderQuestChart />
        <LeaderQuestChartMonth />
      </List>
      <Container>
        <Wrapper>
          {/* 퀘스트 진행 현황 */}
          <Card>
            <CardHeader>
              <CardTitle>🏆 퀘스트 진행 현황</CardTitle>
              <CardDescription>현재 퀘스트 상태</CardDescription>
            </CardHeader>
            <CardContent>
              {quests.map((quest, index) => (
                <div key={index} className="mt-4">
                  <p className="text-sm text-gray-500">
                    {quest.name} ({quest.progress}%)
                  </p>
                  <p className="text-xs text-gray-400">
                    Max: {quest.max}, Medium: {quest.medium}
                  </p>
                  <div className="h-4 w-full rounded bg-gray-200">
                    <div
                      className="h-4 rounded bg-green-500"
                      style={{ width: `${quest.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 직무별 퀘스트 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              직무별 퀘스트
            </h2>
            {jobQuests.map((quest, index) => (
              <div key={index} className="rounded-lg border p-4 shadow-sm">
                <h3 className="text-sm font-semibold">{quest.name}</h3>
                <p className="text-xs text-gray-500">{quest.unit}</p>
                <div className="relative mt-2 h-4 w-full rounded bg-gray-200">
                  <div
                    className="absolute h-full rounded bg-yellow-500"
                    style={{ width: `${quest.medium}%` }}
                  ></div>
                  <div
                    className="absolute h-full rounded bg-red-500"
                    style={{ width: `${quest.progress}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>Medium: {quest.medium}%</span>
                  <span>Max: {quest.max}%</span>
                </div>
              </div>
            ))}
          </section>

          {/* 리더 부여 퀘스트 */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              리더 부여 퀘스트
            </h2>
            {leaderQuests.map((quest, index) => (
              <div key={index} className="rounded-lg border p-4 shadow-sm">
                <h3 className="text-sm font-semibold">{quest.name}</h3>
                <div className="relative mt-2 h-4 w-full rounded bg-gray-200">
                  <div
                    className="absolute h-full rounded bg-yellow-500"
                    style={{ width: `${quest.medium}%` }}
                  ></div>
                  <div
                    className="absolute h-full rounded bg-red-500"
                    style={{ width: `${quest.progress}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>Medium: {quest.medium}%</span>
                  <span>Max: {quest.max}%</span>
                </div>
              </div>
            ))}
          </section>
        </Wrapper>
      </Container>
    </>
  );
}
