import { TabBar } from "@/components/tab-bar";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 서버 측에서 데이터 가져오기
  let isAdmin = false;
  try {
    const response = await fetchWithAuth("/api/users");
    const data = await response.json();
    isAdmin = data.isAdmin;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }

  return (
    <>
      {children}
      {/* TabBar에 isAdmin 전달 */}
      <TabBar isAdmin={isAdmin} />
    </>
  );
}
