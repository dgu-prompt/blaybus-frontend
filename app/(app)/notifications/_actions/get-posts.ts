"use server";

// import { fetchWithAuth } from "@/lib/fetch";

const posts = [
  {
    id: "1",
    postTitle: "AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31)",
    content:
      "새로운 AAA 프로젝트가 신설되었습니다! 참여자는 프로젝트 완료 시 500 do의 경험치를 획득할 수 있습니다. 신청 마감일은 10월 31일이며, 추가 상세 내용은 프로젝트 관리팀에 문의하세요.",
  },
  {
    id: "2",
    postTitle: "잡초이스 공고 (신청 마감 ~11/20)",
    content:
      "직무 선택을 고민 중이신가요? 잡초이스에서 여러분의 새로운 기회를 찾으세요! 다양한 직무 선택과 지원을 통해 경력을 확장할 수 있습니다. 신청은 11월 20일까지 가능하며, 추가 정보는 인사팀으로 문의하세요.",
  },
  {
    id: "3",
    postTitle: "새로운 교육 프로그램 개설 (신청 마감 ~12/15)",
    content:
      "팀원들의 역량 강화를 위해 새로운 교육 프로그램이 개설되었습니다. 주요 내용으로는 최신 기술 트렌드, 문제 해결 워크숍 등이 포함됩니다. 신청 마감일은 12월 15일이며, 프로그램 참가자에게는 추가 경험치 200 do가 지급됩니다.",
  },
  {
    id: "4",
    postTitle: "팀 빌딩 행사 안내",
    content:
      "우리 팀의 화합과 소통을 위한 팀 빌딩 행사가 예정되어 있습니다. 일정은 11월 첫째 주이며, 다양한 레크리에이션과 협업 활동이 포함됩니다. 참가자는 행사 종료 후 특별 보너스 경험치를 받을 수 있습니다.",
  },
  {
    id: "5",
    postTitle: "연말 파티 계획 공유",
    content:
      "2023년을 마무리하며 함께 즐길 연말 파티가 준비 중입니다. 다양한 이벤트와 상품 추첨이 기다리고 있으니 모두 참석해 멋진 추억을 만들어보세요! 상세 일정은 추후 공지됩니다.",
  },
];

interface Post {
  id: string;
  postTitle: string;
  content: string;
}

export async function getPosts() {
  // try {
  //   const response = await fetchWithAuth("/api/posts");

  //   // 성공 여부 확인
  //   if (!response.ok) {
  //     const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
  //     console.error(`Failed to fetch notifications: ${errorDetails}`);
  //     throw new Error(`Error ${response.status}: ${response.statusText}`);
  //   }

  //   return await response.json();
  // } catch (error: unknown) {
  //   // 에러 핸들링
  //   if (error instanceof Error) {
  //     console.error(`Error fetching notifications: ${error.message}`);
  //   } else {
  //     console.error("Unexpected error:", error);
  //   }

  //   // 사용자 친화적 메시지 던지기
  //   throw new Error("Failed to fetch notifications. Please try again.");
  // }

  return new Promise<Post[]>((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500); // 데이터 반환 전 지연 시간 (0.5초)
  });
}
