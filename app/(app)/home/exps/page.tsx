import { NavigationBar } from "@/components/navigation-bar";
import { ExperienceChart } from "./_components/chart";
import { ExperienceProgress } from "./_components/chart2";
import { List, Section } from "@/components/grouped-list";
import { ExperienceTable } from "./_components/exp-table";

export default async function Page() {
  return (
    <>
      <NavigationBar title="경험치" />
      <List>
        <Section>
          <ExperienceProgress />
        </Section>
        <Section>
          <ExperienceChart />
        </Section>
        <Section header="레벨별 필요 경험치">
          <ExperienceTable />
        </Section>
      </List>
    </>
  );
}
