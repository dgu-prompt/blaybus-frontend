export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { ExperienceProgress } from "./_components/experience-progress";
import { List, ListItem, Section } from "@/components/grouped-list";
import { ExperienceTable } from "./_components/exp-table";
import ExperienceByTypeSection from "./_components/experience-by-type-section";
import { ExpProgress } from "./_components/progress";

export default async function Page() {
  return (
    <>
      <NavigationBar title="경험치" />
      <List>
        <Section>
          <ListItem
            title={<span className="font-medium">작년 대비 나의 성장</span>}
          >
            <ExperienceProgress />
          </ListItem>
        </Section>
        <Section>
          <ListItem
            title={<span className="font-medium">현재 레벨 진척도</span>}
          >
            <ExpProgress />
          </ListItem>
        </Section>
        <ExperienceByTypeSection />
        <Section header="레벨별 필요 경험치">
          <ExperienceTable />
        </Section>
      </List>
    </>
  );
}
