"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { NavigationBar } from "@/components/navigation-bar";
import { ExperienceChart } from "./chart";
import ExperienceProgress from "./chart2";
import { Container, Wrapper } from "@/components/container";
import { List, ListItem, ListSpacer, Section } from "@/components/list";
import MiniChart from "../quests/minichart";
import MiniChartLeader from "../quests/minichart-leader";
import MiniChartLeader2 from "../quests/minichart-leader2";
import MiniChartLeadertf from "../quests/minichart-tf";
import MiniChartLeaderhr from "../quests/minichart-hr";
import { ExpProgress } from "./progress";

const userData = {
  id: "2023010101",
  name: "김민수",
  joinDate: "2023-01-01",
  department: "음성 1센터",
  jobGroup: "1",
  level: "F1-Ⅰ",
  totalExp: 12657,
  prevYearExp: 5000,
  currentYearExp: 7657,
  nextLevelExp: 13500,
  midAverageExp: 9000, // 올해 획득 가능한 중위평균 경험치
};

const levelData = [
  { level: "F1-Ⅰ", totalExp: 0 },
  { level: "F1-Ⅱ", totalExp: 13500 },
  { level: "F2-Ⅰ", totalExp: 27000 },
  { level: "F2-Ⅱ", totalExp: 39000 },
];

const activities = [
  { date: "2025-01-05", description: "퀘스트 완료", exp: 1000 },
  { date: "2025-01-06", description: "팀 생산성 목표 달성", exp: 500 },
];

export default function Page() {
  const remainingExp = userData.nextLevelExp - userData.totalExp;
  const progressPrevYear = Math.round(
    (userData.prevYearExp / userData.nextLevelExp) * 100,
  );
  const progressCurrentYear = Math.round(
    (userData.currentYearExp / userData.midAverageExp) * 100,
  );

  return (
    <>
      <NavigationBar title="홈" noBackButton />
      <List>
        <Section>
          <div className="pb-6 pt-8 text-center font-semibold">
            <div className="text-muted-foreground">1월 13일 월요일</div>
            <div className="text-lg">{userData.name}님, 오늘도 힘내봐요!</div>
          </div>
          {/* 오늘 날짜
          이름님 오늘도 힘내볼까요? */}
          {/* 다음 레벨까지 필요한 경험치바 */}
          {/* <ExperienceProgress /> */}
          {/* 현재 레벨과 다음 레벨도 나타내야함 */}
          {/* 그리고 진행중인 퀘스트 개수 개요 */}
        </Section>
        <Section header="경험치">
          <ListItem wrapperClassName="">
            <ExpProgress
              currentExp={userData.totalExp}
              maxExp={userData.nextLevelExp}
            />
          </ListItem>
          {/* <ListItem>
            <div className="grid w-full grid-cols-2 items-center">
              <div className="flex flex-col">
                <div className="text-sm text-muted-foreground">현재 레벨</div>
                <div className="text-2xl font-semibold">{userData.level}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-muted-foreground">
                  다음 레벨까지
                </div>
                <div>
                  <span className="text-2xl font-semibold">
                    {remainingExp.toLocaleString()}
                  </span>
                  <span> do</span>
                </div>
              </div>
            </div>
          </ListItem> */}
          {/* <ListItem>
            <div className="grid w-full grid-cols-2 items-center">
              <div className="flex flex-col">
                <div className="text-sm text-muted-foreground">2024년 획득</div>
                <div>
                  <span className="text-2xl font-semibold">
                    {userData.currentYearExp.toLocaleString()}
                  </span>
                  <span> do</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-muted-foreground">총 경험치</div>
                <div>
                  <span className="text-2xl font-semibold">
                    {userData.totalExp.toLocaleString()}
                  </span>
                  <span> do</span>
                </div>
              </div>
            </div>
          </ListItem> */}
          <ListItem href="/exp">더 보기</ListItem>
        </Section>
        <Section
          header="퀘스트"
          footer="퀘스트별 가장 최근에 받은 경험치를 나타냅니다."
        >
          <ListItem>
            <div className="text-sm text-muted-foreground">
              1개의 직무 퀘스트와 2개의 리더부여 퀘스트가 진행중입니다.
            </div>
          </ListItem>
          <MiniChart />
          <MiniChartLeader />
          <MiniChartLeader2 />
          <MiniChartLeadertf />
          <MiniChartLeaderhr />
        </Section>
      </List>
    </>
  );
}
