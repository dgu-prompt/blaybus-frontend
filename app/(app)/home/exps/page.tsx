import { NavigationBar } from "@/components/navigation-bar";
import { ExperienceChart } from "./_components/chart";
import { ExperienceProgress } from "./_components/chart2";
import { List, Section } from "@/components/grouped-list";

export default function Page() {
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
      </List>
    </>
  );
}
