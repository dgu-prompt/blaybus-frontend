export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section, VStack } from "@/components/grouped-list";
import { ExpProgress } from "./_components/progress";
import { LeaderQuestSection } from "./_components/leader-quest-section";
import { HRQuestSection } from "./_components/hr-quest-section";
import { JobQuestSection } from "./_components/job-quest-section";
import { ProjectQuestSection } from "./_components/project-quest-section";
import { HelloView } from "./_components/hello-view";
import { ExperienceProgress } from "./_components/experience-progress";

export default function Page() {
  return (
    <>
      <NavigationBar title="홈" noBackButton />
      <List>
        <Section>
          <HelloView />
        </Section>
        <Section>
          <ListItem
            title={<span className="font-medium">작년 대비 나의 성장</span>}
          >
            <ExperienceProgress />
          </ListItem>
          <ListItem
            title={<span className="font-medium">현재 레벨 진척도</span>}
          >
            <ExpProgress />
          </ListItem>
          <ListItem title="경험치 자세히 보기" href="/home/exps" />
        </Section>
        <VStack className="gap-3">
          <JobQuestSection />
          <LeaderQuestSection />
          <ProjectQuestSection />
          <HRQuestSection />
        </VStack>
      </List>
    </>
  );
}
