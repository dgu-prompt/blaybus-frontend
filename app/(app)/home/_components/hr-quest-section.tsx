import { ChartCandlestick } from "lucide-react";
import { HStack, ListItem, Section } from "@/components/grouped-list";
import { HRQuestChart } from "./hr-quest-chart";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

// API에서 반환된 각 퀘스트의 타입
interface ExpsHistory {
  expId: number;
  employeeNumber: number;
  expYear: number;
  expDo: number;
  expType: "HR_FIRST" | "HR_SECOND" | "JOB_QUEST" | "LEADER_QUEST" | "PROJECT";
  hrTier?: string;
}

export async function getHRQuests() {
  try {
    const response = await fetchWithAuth("/api/exps/history");

    // 성공 여부 확인
    if (!response.ok) {
      const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
      console.error(`Failed to fetch user: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error: unknown) {
    // 에러 핸들링
    if (error instanceof Error) {
      console.error(`Error fetching user: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    // 사용자 친화적 메시지 던지기
    throw new Error("Failed to fetch user. Please try again.");
  }
}

export async function HRQuestSection() {
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
  const label = lastData?.expType === "HR_FIRST" ? "상반기" : "하반기";

  const expDoTick = 1500; // magic number
  const chartData = [
    {
      bangi: label,
      d: {
        expDo: expDoTick,
        fill: lastData?.hrTier === "D등급" ? "hsl(var(--chart-4))" : undefined,
      },
      c: {
        expDo: expDoTick,
        fill: lastData?.hrTier === "C등급" ? "hsl(var(--chart-4))" : undefined,
      },
      b: {
        expDo: expDoTick,
        fill: lastData?.hrTier === "B등급" ? "hsl(var(--chart-4))" : undefined,
      },
      a: {
        expDo: expDoTick,
        fill: lastData?.hrTier === "A등급" ? "hsl(var(--chart-4))" : undefined,
      },
      s: {
        expDo: expDoTick,
        fill: lastData?.hrTier === "S등급" ? "hsl(var(--chart-4))" : undefined,
      },
    },
  ];

  const expDo =
    lastData?.hrTier === "S등급"
      ? 6500
      : lastData?.hrTier === "A등급"
        ? 4500
        : lastData?.hrTier === "B등급"
          ? 3000
          : lastData?.hrTier === "C등급"
            ? 1500
            : 0;

  return (
    <Section>
      <ListItem
        href="/home/hr-quest"
        title={
          <HStack className="gap-2 text-chart-4">
            <ChartCandlestick className="size-5" />
            <span className="font-medium">인사평가</span>
          </HStack>
        }
        detail={<span className="text-sm">{label}</span>}
      >
        <HStack className="items-end">
          <span className="mr-auto">
            <span className="text-2xl font-semibold">
              {new Intl.NumberFormat("ko-KR").format(expDo)}
            </span>
            <span className="text-base"> do</span>
          </span>
          <div className="h-12 w-24">
            <HRQuestChart data={chartData} />
          </div>
        </HStack>
      </ListItem>
    </Section>
  );
}
