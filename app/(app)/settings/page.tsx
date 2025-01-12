"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { List, ListItem, Section } from "@/components/list";

import { NavigationBar } from "@/components/navigation-bar";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

const userData = {
  id: "2023010101",
  name: "김민수",
  joinDate: "2023-01-01",
  department: "음성 1센터",
  jobGroup: "1",
  level: "F1-Ⅰ",
};

export default function Page() {
  const { theme, setTheme } = useTheme();

  const handleCheckedChange = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  return (
    <>
      <NavigationBar title="설정" />
      <List>
        <Section header="계정 설정">
          <ListItem href="#">비밀번호 변경</ListItem>
        </Section>
        <Section header="앱 설정">
          <ListItem href="/settings/notifications">알림</ListItem>
          <ListItem href="/settings/theme">앱 테마</ListItem>
          {/* <ListItem>
            <div className="flex w-full items-center justify-between">
              <span>다크 모드</span>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={handleCheckedChange}
              />
            </div>
          </ListItem> */}
          <ListItem href="/settings/language">언어</ListItem>
        </Section>

        <Section header="관리자">
          <ListItem href="/settings/notifications">회원 관리</ListItem>
          <ListItem href="/settings/display">게시글 관리</ListItem>
          <ListItem href="/settings/language">알림 관리</ListItem>
          <ListItem
            action={() => {
              alert("google sheet sync clicked");
            }}
          >
            Google Sheet 지금 동기화
          </ListItem>
        </Section>

        <Section header="개발자">
          <ListItem href="/test">테스트 페이지</ListItem>
          <ListItem href="/test/push">푸시 알림 테스트</ListItem>
        </Section>

        <Section header="앱 정보">
          <ListItem>
            <div className="flex w-full justify-between">
              <span>두더디 버전</span>
              <span className="text-muted-foreground">1.0.0</span>
            </div>
          </ListItem>
          <ListItem href="/settings/support">문의하기</ListItem>
          <ListItem href="/settings/sponsor">프롬프트 후원하기</ListItem>
          <ListItem href="/settings/github">GitHub Repository</ListItem>
        </Section>

        {/* 로그아웃 섹션 */}
        <Section header=" " footer=" ">
          <ListItem
            action={() => {
              alert("logout clicked");
            }}
            className="text-destructive"
          >
            로그아웃
          </ListItem>
        </Section>
      </List>
      <div className="w-full max-w-screen-sm"></div>
    </>
  );
}
