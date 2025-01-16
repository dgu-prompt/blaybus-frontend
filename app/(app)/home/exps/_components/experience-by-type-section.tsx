import { HStack, ListItem, Section } from "@/components/grouped-list";
import { getExpsHistory } from "../_actions/get-exps-history";
import { ExperienceChart } from "./chart";

interface ExpsHistory {
  expId: number;
  employeeNumber: number;
  expYear: number;
  expDo: number;
  expType: string;
  hrTier?: string;
}

const expTypeLabel: { [key in ExpsHistory["expType"]]: string } = {
  HR_FIRST: "상반기 인사평가",
  HR_SECOND: "하반기 인사평가",
  JOB_QUEST: "직무 퀘스트",
  LEADER_QUEST: "리더부여 퀘스트",
  PROJECT: "전사 프로젝트",
};

export default async function ExperienceByTypeSection() {
  const expsHistory = await getExpsHistory();
  const thisYear = 2024;
  const thisYearHistories = expsHistory.exps_history.filter(
    (item: ExpsHistory) => item.expYear === thisYear,
  );

  console.log(thisYearHistories);

  const chartData = thisYearHistories.map((item: ExpsHistory) => ({
    category: expTypeLabel[item.expType], // 라벨 매핑
    points: item.expDo,
    fill: `hsl(var(--chart-${Object.keys(expTypeLabel).indexOf(item.expType) + 1}))`, // 색상 설정
  }));

  console.log(chartData);

  return (
    <Section>
      <ExperienceChart data={chartData} />
      {thisYearHistories.map((history: ExpsHistory) => {
        return (
          <ListItem
            key={history.expId}
            title={
              <HStack className="gap-2">
                <div
                  className={`h-4 w-2 rounded-full bg-chart-${Object.keys(expTypeLabel).indexOf(history.expType) + 1}`}
                ></div>

                <span>{expTypeLabel[history.expType]}</span>
              </HStack>
            }
            detail={history.expDo}
          />
        );
      })}
    </Section>
  );
}
