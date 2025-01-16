import { Briefcase } from "lucide-react";
import { HStack, ListItem, Section } from "@/components/grouped-list";
import { JobQuestChart } from "./job-quest-chart";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

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

export async function JobQuestSection() {
  // 데이터 가져오기
  const [weekData, monthData] = await Promise.all([
    fetchJobQuests("WEEK"),
    fetchJobQuests("MONTH"),
  ]);

  // 병합 처리
  const mergedData: JobQuest[] = [...weekData, ...monthData];

  if (mergedData.length === 0) {
    return (
      <Section>
        <ListItem
          title={
            <HStack className="gap-2 text-chart-1">
              <Briefcase className="size-5" />
              <span className="font-medium">직무 퀘스트</span>
            </HStack>
          }
        >
          <HStack className="items-end">
            <span className="text-sm text-muted-foreground">
              직무 퀘스트 데이터가 없습니다.
            </span>
          </HStack>
        </ListItem>
      </Section>
    );
  }

  return (
    <Section>
      {mergedData.map((quest) => {
        // 현재 주기 데이터 찾기
        const currentPeriod = quest.questsProgress.find(
          (progress) => progress.isCurrentPeriod,
        );

        const periodString = quest.frequencyType == "WEEK" ? "주차" : "월";
        const detailString = `${currentPeriod?.period || "-"}${periodString}`;

        // 차트 데이터 생성
        const chartData = quest.questsProgress.slice(-6).map((progress) => ({
          period: progress.period,
          expDo: progress.status === "MAX" ? quest.maxExpDo : quest.medianExpDo,
          fill: progress.isCurrentPeriod ? "hsl(var(--chart-1))" : undefined,
        }));

        const expDo = currentPeriod
          ? currentPeriod.status === "MAX"
            ? quest.maxExpDo
            : quest.medianExpDo
          : 0;

        return (
          <ListItem
            key={quest.questId}
            href="/home/job-quest"
            title={
              <HStack className="gap-2 text-chart-1">
                <Briefcase className="size-5" />
                <span className="font-medium">
                  {quest.departmentId} 직무 퀘스트
                </span>
              </HStack>
            }
            detail={<span className="text-sm">{detailString}</span>}
          >
            <HStack className="items-end">
              <span className="mr-auto">
                <span className="text-2xl font-semibold">
                  {new Intl.NumberFormat("ko-KR").format(expDo)}
                </span>
                <span className="text-base"> do</span>
              </span>
              <div className="h-12 w-24">
                <JobQuestChart data={chartData} />
              </div>
            </HStack>
          </ListItem>
        );
      })}
    </Section>
  );
}
