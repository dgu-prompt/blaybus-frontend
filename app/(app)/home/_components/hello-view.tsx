import { fetchWithAuth } from "@/lib/fetch-with-auth";
import { Today } from "./today";
import { Card } from "@/components/ui/card";

// TODO: 유저 아이디 말고 실제 이름을 불러오도록
export async function getUsername() {
  try {
    const response = await fetchWithAuth("/api/users");

    if (!response.ok) {
      throw new Error("Failed to fetch username.");
    }
    return await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch username.");
  }
}

export async function HelloView() {
  const user = await getUsername();

  return (
    <Card>
      <div className="py-6 text-center font-semibold">
        <div className="text-muted-foreground">
          <Today />
        </div>
        <div className="text-lg">{user.employeeName}님, 오늘도 힘내봐요!</div>
      </div>
    </Card>
  );
}
