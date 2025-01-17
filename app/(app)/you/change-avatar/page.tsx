export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { ChangeAvatarForm } from "./_components/change-avatar-form";
import { getUserInfo } from "./_actions/get-user-info";

export default async function Page() {
  const user = await getUserInfo();

  return (
    <>
      <NavigationBar title="아바타 변경하기" />
      <ChangeAvatarForm user={user} />
    </>
  );
}
