import { Briefcase } from "lucide-react";
import { HStack, List, ListItem, Section } from "@/components/grouped-list";
import { JobQuestChart } from "./_components/job-quest-chart";
import { fetchWithAuth } from "@/lib/fetch-with-auth";
import { NavigationBar } from "@/components/navigation-bar";

// questsProgress 배열의 개별 항목에 대한 타입
interface QuestProgress {
  questId: number;
  status: "MAX" | "MEDIUM"; // 가능한 상태
  period: number; // 주기 (1, 2, 3...)
  isCurrentPeriod: boolean; // 현재 주기 여부
}

// API에서 반환된 각 퀘스트의 타입
interface JobQuest {
  questId: number;
  maxExpDo: number; // 최대 경험치
  medianExpDo: number; // 중간 경험치
  frequencyType: "WEEK" | "MONTH"; // 주기 타입
  departmentId: string; // 부서 ID
  questsProgress: QuestProgress[]; // 진행 상황 배열
}

async function fetchJobQuests(
  frequency: "WEEK" | "MONTH",
): Promise<JobQuest[]> {
  const res = await fetchWithAuth(
    `/api/job-quests/list?frequency=${frequency}`,
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch ${frequency} data.`);
  }
  return res.json() as Promise<JobQuest[]>;
}

export default async function JobQuestDetails() {
  // 데이터 가져오기
  const [weekData, monthData] = await Promise.all([
    fetchJobQuests("WEEK"),
    fetchJobQuests("MONTH"),
  ]);

  // 병합 처리
  const mergedData: JobQuest[] = [...weekData, ...monthData];
  const quest = mergedData[0];

  const currentPeriod = quest.questsProgress.find(
    (progress) => progress.isCurrentPeriod,
  );

  // 차트 데이터 생성
  const chartData = quest.questsProgress.map((progress) => ({
    period: progress.period,
    expDo:
      progress.status === "MAX"
        ? quest.maxExpDo
        : progress.status === "MEDIUM"
          ? quest.medianExpDo
          : 1,
    fill:
      progress.status === "MAX"
        ? "hsla(var(--chart-1) / 0.5)"
        : progress.status === "MEDIUM"
          ? "hsl(var(--chart-1))"
          : "hsl(var(--chart-1))",
  }));

  const chartTicks = [0, quest.medianExpDo, quest.maxExpDo];
  const periodString = quest.frequencyType == "WEEK" ? "주차" : "월";
  const detailString = `${currentPeriod?.period || "-"}${periodString}`;

  const totalExpDo = quest.questsProgress.reduce((total, progress) => {
    return (
      total + (progress.status === "MAX" ? quest.maxExpDo : quest.medianExpDo)
    );
  }, 0);
  const formattedTotalExpDo = new Intl.NumberFormat("ko-KR").format(totalExpDo);

  return (
    <>
      <NavigationBar title="직무 퀘스트" />
      <List>
        <Section>
          <ListItem
            title={
              <HStack className="gap-2 text-chart-1">
                <Briefcase className="size-5" />
                <span className="font-medium">
                  {quest.departmentId} - 직무 퀘스트
                </span>
              </HStack>
            }
            detail={detailString}
          >
            <HStack className="items-end">
              <span className="mr-auto">
                <span className="text-2xl font-semibold">
                  {currentPeriod
                    ? currentPeriod.status === "MAX"
                      ? quest.maxExpDo
                      : quest.medianExpDo
                    : "0"}
                </span>
                <span className="text-base"> do</span>
              </span>
            </HStack>
            <JobQuestChart data={chartData} ticks={chartTicks} />
          </ListItem>
          <ListItem title={`총 ${formattedTotalExpDo} Do`}></ListItem>
        </Section>
        <Section header="모든 데이터">
          {quest.questsProgress
            .slice()
            .reverse()
            .map((progress, index) => {
              let expDo = 0;
              if (progress.status == "MAX") expDo = quest.maxExpDo;
              else if (progress.status == "MEDIUM") expDo = quest.medianExpDo;

              return (
                <ListItem
                  key={index}
                  detail={`${progress.period}주차`}
                  title={`${expDo} do (${progress.status})`}
                />
              );
            })}
        </Section>
      </List>
    </>
  );
}
