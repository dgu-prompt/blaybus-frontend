import { fetchJobQuestDetails } from "./_actions/fetch-job-quest-details";
import { JobQuestChart } from "./job-quest-chart2";
import { List, ListItem, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";

export default async function JobQuestDetails() {
  const { chartData, listData } = await fetchJobQuestDetails();

  return (
    <>
      <NavigationBar title="직무별 퀘스트" />
      <List className="gap-4 p-4">
        <Section header="직무별 퀘스트">
          <JobQuestChart chartData={chartData} />
        </Section>
        <Section header="경험치 현황 목록">
          {listData.map((item, index) => (
            <ListItem key={index}>
              <div className="flex justify-between">
                <span>{item.period}</span>
                <span>{item.points}점</span>
              </div>
              <div className="text-sm text-muted-foreground">{item.detail}</div>
            </ListItem>
          ))}
        </Section>
      </List>
    </>
  );
}
