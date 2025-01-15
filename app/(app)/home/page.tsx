export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { ExpProgress } from "./_components/progress";
import { LeaderQuestSection } from "./_components/leader-quest-section";
import { HRQuestSection } from "./_components/hr-quest-section";
import { JobQuestSection } from "./_components/job-quest-section";
import { ProjectQuestSection } from "./_components/project-quest-section";
import { HelloView } from "./_components/hello-view";

export default function Page() {
  return (
    <>
      <NavigationBar title="홈" noBackButton />
      <List>
        <Section>
          <HelloView />
        </Section>
        <Section header="경험치">
          <ListItem>
            <ExpProgress />
          </ListItem>
          <ListItem title="더 보기" href="/home/exps" />
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
      </List>
    </>
  );
}
