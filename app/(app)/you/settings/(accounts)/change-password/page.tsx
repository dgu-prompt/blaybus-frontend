export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { ChangePasswordForm } from "./_components/change-password-form";
import { getUserInfo } from "./_actions/get-user-info";

export default async function Page() {
  const user = await getUserInfo();

  return (
    <>
      <NavigationBar title="비밀번호 변경" />
      <ChangePasswordForm user={user} />
    </>
  );
}
