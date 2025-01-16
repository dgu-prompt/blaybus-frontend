import { HStack, ListItem, Section } from "@/components/grouped-list";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

interface Ranking {
  employeeNumber: number;
  employeeName: string;
  totalExp: number;
  recentLv: string;
  rank: number;
}

interface RankingWithColor {
  employeeNumber: number;
  employeeName: string;
  totalExp: number;
  recentLv: string;
  rank: number;
  fill: string;
}

export async function getRanking() {
  try {
    const response = await fetchWithAuth("/api/exps/rank");

    // 성공 여부 확인
    if (!response.ok) {
      const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
      console.error(`Failed to fetch ranking: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error: unknown) {
    // 에러 핸들링
    if (error instanceof Error) {
      console.error(`Error fetching ranking: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    // 사용자 친화적 메시지 던지기
    throw new Error("Failed to fetch ranking. Please try again.");
  }
}

export default async function RankingSection() {
  const ranking = await getRanking();
  const slicedRanking = ranking.slice(0, 5);
  const coloredSlicedRanking = slicedRanking.map(
    (item: Ranking, index: number) => ({
      ...item,
      fill:
        index === 0
          ? "#D5A11E" // 금색
          : index === 1
            ? "#A3A3A3" // 은색
            : index === 2
              ? "#CD7F32" // 동색
              : undefined, // 나머지 항목은 fill 없음
    }),
  );
  console.log(coloredSlicedRanking);

  return (
    <Section header="올해의 성장 랭킹">
      {coloredSlicedRanking.map((item: RankingWithColor) => (
        <ListItem
          key={item.rank}
          title={
            <HStack className="gap-2">
              <div
                className="h-4 w-2 rounded-full"
                style={{
                  backgroundColor: `${item.fill}`,
                }}
              />
              <span className="w-4 text-center">{`${item.rank}.`}</span>
              <span>{item.employeeName}</span>
            </HStack>
          }
          detail={new Intl.NumberFormat("ko-KR").format(item.totalExp)}
        />
      ))}
    </Section>
  );
}
