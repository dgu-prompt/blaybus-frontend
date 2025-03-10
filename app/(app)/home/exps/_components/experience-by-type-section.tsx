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

  const chartData = thisYearHistories.map((item: ExpsHistory) => ({
    category: expTypeLabel[item.expType], // 라벨 매핑
    points: item.expDo,
    fill: `hsl(var(--chart-${Object.keys(expTypeLabel).indexOf(item.expType) + 1}))`, // 색상 설정
  }));

  return (
    <Section>
      <ListItem
        title={<span className="font-medium">{thisYear}년 경험치 현황</span>}
      >
        <ExperienceChart data={chartData} />
      </ListItem>
      {thisYearHistories.map((history: ExpsHistory) => {
        return (
          <ListItem
            key={history.expId}
            title={
              <HStack className="gap-2">
                <div
                  className="h-4 w-2 rounded-full"
                  style={{
                    backgroundColor: `hsl(var(--chart-${Object.keys(expTypeLabel).indexOf(history.expType) + 1}))`,
                  }}
                />

                <span>{expTypeLabel[history.expType]}</span>
              </HStack>
            }
            detail={new Intl.NumberFormat("ko-KR").format(history.expDo)}
          />
        );
      })}
    </Section>
  );
}
