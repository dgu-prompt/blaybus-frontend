import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";

import { ExpProgress } from "./_components/progress";
import { LeaderQuestSection } from "./_components/leader-quest-section";
import { HRQuestSection } from "./_components/hr-quest-section";
import { JobQuestSection } from "./_components/job-quest-section";
import { ProjectQuestSection } from "./_components/project-quest-section";
import ExperienceProgress from "./chart2";
import { ExperienceChart } from "./chart";
import { HelloView } from "./_components/hello-view";

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
          <HelloView />
        </Section>
        <Section header="경험치">
          <ListItem>
            <ExpProgress
              currentExp={userData.totalExp}
              maxExp={userData.nextLevelExp}
            />
          </ListItem>
          <ListItem title="더 보기" href="/exp" />
        </Section>
        <Section header="퀘스트">
          <ListItem
            title={
              <span className="text-sm text-muted-foreground">
                1개의 직무 퀘스트와 2개의 리더부여 퀘스트가 진행중입니다.
              </span>
            }
          ></ListItem>
        </Section>
        <JobQuestSection />
        <LeaderQuestSection />
        <ProjectQuestSection />
        <HRQuestSection />
        <ExperienceChart />
        <ExperienceProgress />
      </List>
    </>
  );
}
