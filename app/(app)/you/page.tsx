"use client";

import { List, ListItem, ListSpacer, Section } from "@/components/list";
import { NavigationBar } from "@/components/navigation-bar";
import { SettingsButton } from "./_components/settings-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <ListItem action="#">아바타 변경하기</ListItem>
        </Section>
        <Section header="내 정보">
          <ListItem>
            <div className="flex w-full justify-between">
              <span>이름</span>
              <span className="text-muted-foreground">{userData.name}</span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex w-full justify-between">
              <span>사번</span>
              <span className="text-muted-foreground">{userData.id}</span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex w-full justify-between">
              <span>입사일</span>
              <span className="text-muted-foreground">{userData.joinDate}</span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex w-full justify-between">
              <span>소속</span>
              <span className="text-muted-foreground">
                {userData.department}
              </span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex w-full justify-between">
              <span>직무그룹</span>
              <span className="text-muted-foreground">{userData.jobGroup}</span>
            </div>
          </ListItem>
        </Section>
        <Section header="경험치" footer=" ">
          <ListItem>
            <div className="flex w-full justify-between">
              <span>레벨</span>
              <span className="text-muted-foreground">{userData.level}</span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex w-full justify-between">
              <span>총 경험치</span>
              <span className="text-muted-foreground">
                {userData.totalExp} do
              </span>
            </div>
          </ListItem>
        </Section>
        {/* <Section header=" " footer=" ">
          <ListItem action="/settings/accounts/change-password">
            비밀번호 변경
          </ListItem>
          <ListItem className="text-destructive" action={() => {}}>
            로그아웃
          </ListItem>
        </Section> */}
      </List>
    </>
  );
}
