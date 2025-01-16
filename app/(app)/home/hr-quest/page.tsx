export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { ChartCandlestick } from "lucide-react";
import { HStack, List, ListItem, Section } from "@/components/grouped-list";
import { HRQuestChart } from "./_components/hr-quest-chart";
import { NavigationBar } from "@/components/navigation-bar";
import { getHRQuests } from "./_actions/get-hr-quests";

// API에서 반환된 각 퀘스트의 타입
interface ExpsHistory {
  expId: number;
  employeeNumber: number;
  expYear: number;
  expDo: number;
  expType: "HR_FIRST" | "HR_SECOND" | "JOB_QUEST" | "LEADER_QUEST" | "PROJECT";
  hrTier?: string;
}

export default async function Page() {
  const data: { exps_history: ExpsHistory[] } = await getHRQuests();
  const filteredData =
    data?.exps_history
      ?.filter(
        (item: ExpsHistory) =>
          item.expYear === 2024 &&
          (item.expType === "HR_FIRST" || item.expType === "HR_SECOND"),
      )
      ?.sort((a, b) => {
        if (a.expType === "HR_FIRST" && b.expType === "HR_SECOND") return -1;
        if (a.expType === "HR_SECOND" && b.expType === "HR_FIRST") return 1;
        return 0;
      }) || [];
  const lastData = filteredData.at(-1);
  const detailString = lastData?.expType === "HR_FIRST" ? "상반기" : "하반기";
  console.log(filteredData);

  // 등급별 expDo 계산 함수
  const calculateExpDo = (tier: string | undefined) => {
    return tier === "S등급"
      ? 6500
      : tier === "A등급"
        ? 4500
        : tier === "B등급"
          ? 3000
          : tier === "C등급"
            ? 1500
            : 0;
  };

  // 차트 데이터 생성
  const chartData = filteredData.map((item) => ({
    period: item.expType === "HR_FIRST" ? "상반기" : "하반기",
    expDo: calculateExpDo(item.hrTier),
    fill: "hsl(var(--chart-4))", // fill 고정
  }));

  console.log(chartData);

  // // 차트 데이터 생성
  // const chartData = quest.questsProgress.map((progress) => ({
  //   period: progress.period,
  //   expDo:
  //     progress.status === "MAX"
  //       ? quest.maxExpDo
  //       : progress.status === "MEDIUM"
  //         ? quest.medianExpDo
  //         : 1,
  //   fill:
  //     progress.status === "MAX"
  //       ? "hsla(var(--chart-2) / 0.5)"
  //       : progress.status === "MEDIUM"
  //         ? "hsl(var(--chart-2))"
  //         : "hsl(var(--chart-2))",
  // }));

  // const chartTicks = [0, quest.medianExpDo, quest.maxExpDo];
  // const periodString = quest.frequencyType == "WEEK" ? "주차" : "월";
  // const detailString = `${currentPeriod?.period || "-"}${periodString}`;
  const lastExpDo = calculateExpDo(lastData?.hrTier);
  const fomattedLastExpDo = new Intl.NumberFormat("ko-KR").format(lastExpDo);
  const totalExpDo = filteredData.reduce((total, item) => {
    return total + calculateExpDo(item.hrTier);
  }, 0);
  const formattedTotalExpDo = new Intl.NumberFormat("ko-KR").format(totalExpDo);

  return (
    <>
      <NavigationBar title="인사평가" />
      <List>
        <Section>
          <ListItem
            title={
              <HStack className="gap-2 text-chart-4">
                <ChartCandlestick className="size-5" />
                <span className="font-medium">인사평가</span>
              </HStack>
            }
            detail={detailString}
          >
            <HStack className="items-end">
              <span className="mr-auto">
                <span className="text-2xl font-semibold">
                  {fomattedLastExpDo}
                </span>
                <span className="text-base"> do</span>
              </span>
            </HStack>
            <HRQuestChart data={chartData} />
          </ListItem>
          <ListItem title={`총 ${formattedTotalExpDo} do`}></ListItem>
        </Section>
        <Section header="모든 데이터">
          {filteredData
            .slice()
            .reverse()
            .map((bangi, index) => {
              return (
                <ListItem
                  key={index}
                  detail={`${Intl.NumberFormat("ko-KR").format(calculateExpDo(bangi.hrTier))}`}
                  title={bangi.expType === "HR_FIRST" ? "상반기" : "하반기"}
                />
              );
            })}
        </Section>
      </List>
    </>
  );
}
