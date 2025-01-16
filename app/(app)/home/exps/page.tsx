export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { ExperienceProgress } from "./_components/experience-progress";
import { List, Section } from "@/components/grouped-list";
import { ExperienceTable } from "./_components/exp-table";
import ExperienceByTypeSection from "./_components/experience-by-type-section";

export default async function Page() {
  return (
    <>
      <NavigationBar title="경험치" />
      <List>
        <Section>
          <ExperienceProgress />
        </Section>
        <ExperienceByTypeSection />
        <Section header="레벨별 필요 경험치">
          <ExperienceTable />
        </Section>
      </List>
    </>
  );
}
