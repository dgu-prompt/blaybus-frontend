"use server";

import { ListItem } from "@/components/grouped-list";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

// 경험치 레벨 데이터
type LevelGroup = "F" | "B" | "G" | "T";

const experienceLevels: Record<
  LevelGroup,
  { level: string; totalExp: number | null }[]
> = {
  F: [
    { level: "F1-Ⅰ", totalExp: 0 },
    { level: "F1-Ⅱ", totalExp: 13500 },
    { level: "F2-Ⅰ", totalExp: 27000 },
    { level: "F2-Ⅱ", totalExp: 39000 },
    { level: "F2-Ⅲ", totalExp: 51000 },
    { level: "F3-Ⅰ", totalExp: 63000 },
    { level: "F3-Ⅱ", totalExp: 78000 },
    { level: "F3-Ⅲ", totalExp: 93000 },
    { level: "F4-Ⅰ", totalExp: 108000 },
    { level: "F4-Ⅱ", totalExp: 126000 },
    { level: "F4-Ⅲ", totalExp: 144000 },
    { level: "F5", totalExp: 162000 },
  ],
  B: [
    { level: "B1", totalExp: 0 },
    { level: "B2", totalExp: 24000 },
    { level: "B3", totalExp: 52000 },
    { level: "B4", totalExp: 78000 },
    { level: "B5", totalExp: 117000 },
    { level: "B6", totalExp: 169000 },
  ],
  G: [
    { level: "G1", totalExp: 0 },
    { level: "G2", totalExp: 24000 },
    { level: "G3", totalExp: 52000 },
    { level: "G4", totalExp: 78000 },
    { level: "G5", totalExp: 117000 },
    { level: "G6", totalExp: 169000 },
  ],
  T: [
    { level: "T1", totalExp: null },
    { level: "T2", totalExp: null },
    { level: "T3", totalExp: null },
    { level: "T4", totalExp: null },
    { level: "T5", totalExp: null },
    { level: "T6", totalExp: null },
  ],
};

// 유저 정보 가져오기
export async function getUserInfo() {
  try {
    const response = await fetchWithAuth("/api/users");

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`Failed to fetch user: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user. Please try again.");
  }
}

function getFirstChar(str: string) {
  return str && str.length > 0 ? str[0] : null; // 문자열이 유효하지 않으면 null 반환
}

// 유저의 레벨 그룹 가져오기
export async function getUserLevelGroup() {
  const userData = await getUserInfo();
  const userLevel = userData.level;
  const userGroup = getFirstChar(userLevel);
  return userGroup;
}

// 경험치 표 컴포넌트
export async function ExperienceTable() {
  const group = await getUserLevelGroup();

  if (!group) {
    return <p>사용자의 그룹 정보를 찾을 수 없습니다.</p>;
  }

  const levels = experienceLevels[group as LevelGroup];

  return (
    <>
      {levels.map((level) => (
        <ListItem
          key={level.level}
          title={level.level}
          detail={
            level.totalExp !== null ? level.totalExp.toLocaleString() : "N/A"
          }
        />
      ))}
    </>
  );
}
