import { fetchWithAuth } from "@/lib/fetch";
import { Today } from "./today";

// TODO: 유저 아이디 말고 실제 이름을 불러오도록
export async function getUsername() {
  try {
    const response = await fetchWithAuth("/api/username");

    if (!response.ok) {
      throw new Error("Failed to fetch username.");
    }
    return await response.text();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch username.");
  }
}

export async function HelloView() {
  const data = await getUsername();
  const username = data;

  return (
    <div className="py-6 text-center font-semibold">
      <div className="text-muted-foreground">
        <Today />
      </div>
      <div className="text-lg">{username}님, 오늘도 힘내봐요!</div>
    </div>
  );
}
