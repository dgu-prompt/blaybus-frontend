import { Target } from "lucide-react";
import { HStack, ListItem, Section } from "@/components/grouped-list";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

interface ProjectQuest {
  projectId: number;
  projectExpDo: number;
  projectName: string;
  description?: string;
}

async function fetchProjects() {
  try {
    const response = await fetchWithAuth("/api/projects");

    // 성공 여부 확인
    if (!response.ok) {
      const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
      console.error(`Failed to fetch notifications: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error: unknown) {
    // 에러 핸들링
    if (error instanceof Error) {
      console.error(`Error fetching notifications: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    // 사용자 친화적 메시지 던지기
    throw new Error("Failed to fetch notifications. Please try again.");
  }
}

export async function ProjectQuestSection() {
  const projects = await fetchProjects();

  if (projects.length === 0) {
    return (
      <Section>
        <ListItem
          title={
            <HStack className="gap-2 text-chart-1">
              <Target className="size-5" />
              <span className="font-medium">전사 프로젝트</span>
            </HStack>
          }
        >
          <HStack className="items-end">
            <span className="text-sm text-muted-foreground">
              참여중인 전사 프로젝트가 없습니다.
            </span>
          </HStack>
        </ListItem>
      </Section>
    );
  }

  return (
    <Section>
      {projects.map((project: ProjectQuest) => {
        return (
          <ListItem
            key={project.projectId}
            title={
              <HStack className="gap-2 text-chart-3">
                <Target className="size-5" />
                <span className="font-medium">{project.projectName}</span>
              </HStack>
            }
          >
            {project.description && (
              <span className="text-sm text-muted-foreground">
                {project.description}
              </span>
            )}
            <HStack className="items-end">
              <span className="mr-auto">
                <span className="text-2xl font-semibold">
                  {project.projectExpDo}
                </span>
                <span className="text-base"> do</span>
              </span>
              <div className="h-12 w-24">
                {/* <JobQuestChart data={chartData} /> */}
              </div>
            </HStack>
          </ListItem>
        );
      })}
    </Section>
  );
}
