export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { List, ListItem, ListLink, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SettingsButton } from "./_components/settings-button";
import { getUserInfo } from "./_actions/get-user-info";

export default async function Page() {
  const userData = await getUserInfo();

  return (
    <>
      <NavigationBar
        title="나"
        actionButton={<SettingsButton />}
        noBackButton
      />
      <List>
        <Section>
          <ListItem>
            <div className="flex w-full flex-col items-center justify-center gap-4 py-6">
              <Avatar className="size-32">
                <AvatarImage src={userData.characterUrl} />
                <AvatarFallback>{userData.employeeName}</AvatarFallback>
              </Avatar>
              <span className="text-xl font-semibold">
                {userData.employeeName}
              </span>
            </div>
          </ListItem>
          <ListLink title="아바타 변경하기" href="#" />
        </Section>
        <Section header="내 정보">
          <ListItem title="이름" detail={userData.employeeName} />
          <ListItem title="사번" detail={userData.employeeNumber} />
          <ListItem title="입사일" detail={userData.joinDate} />
          <ListItem title="소속" detail={userData.department} />
          <ListItem title="직무그룹" detail={userData.jobGroupId} />
        </Section>
        <Section header="경험치">
          <ListItem title="레벨" detail={userData.level} />
          {/* <ListItem title="총 경험치" detail={`${userData.totalExp} do`} /> */}
        </Section>
      </List>
    </>
  );
}
