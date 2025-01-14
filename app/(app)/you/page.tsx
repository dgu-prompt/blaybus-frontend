"use client";

import { List, ListItem, ListLink, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SettingsButton } from "./_components/settings-button";

const userData = {
  id: "2023010101",
  name: "김민수",
  joinDate: "2023-01-01",
  department: "음성 1센터",
  jobGroup: "1",
  level: "F1-Ⅰ",
  totalExp: 12657,
  prevYearExp: 5000,
  currentYearExp: 7657,
  nextLevelExp: 13500,
  midAverageExp: 9000, // 올해 획득 가능한 중위평균 경험치
};

export default function Page() {
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
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>KM</AvatarFallback>
              </Avatar>
              <span className="text-xl font-semibold">김민수</span>
            </div>
          </ListItem>
          <ListLink title="아바타 변경하기" href="#" />
        </Section>
        <Section header="내 정보">
          <ListItem title="이름" detail={userData.name} />
          <ListItem title="사번" detail={userData.id} />
          <ListItem title="입사일" detail={userData.joinDate} />
          <ListItem title="소속" detail={userData.department} />
          <ListItem title="직무그룹" detail={userData.jobGroup} />
        </Section>
        <Section header="경험치">
          <ListItem title="레벨" detail={userData.level} />
          <ListItem title="총 경험치" detail={`${userData.totalExp} do`} />
        </Section>
      </List>
    </>
  );
}
