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
        <Section>
          <ListItem>
            <ExpProgress />
          </ListItem>
          <ListItem title="더 보기" href="/home/exps" />
        </Section>
        <JobQuestSection />
        <LeaderQuestSection />
        <ProjectQuestSection />
        <HRQuestSection />
      </List>
    </>
  );
}
