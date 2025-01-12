"use client";
import { TypographyP } from "@/components/typography";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/list";

// settingsData.ts

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
      <NavigationBar title="프로필 설정" />
      {/* <div className="w-full max-w-screen-sm px-2 pb-4">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>👤 본인 정보</CardTitle>
            <CardDescription>사용자 인적사항</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">사번</p>
                <p className="font-semibold">{userData.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">이름</p>
                <p className="font-semibold">{userData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">입사일</p>
                <p className="font-semibold">{userData.joinDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">소속</p>
                <p className="font-semibold">{userData.department}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
      <div className="w-full max-w-screen-sm">
        <List>
          <Section>
            <Row>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="text-lg font-semibold text-foreground">
                    김민수
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2023010101
                  </div>
                </div>
              </div>
            </Row>
          </Section>
          <Section title="계정 설정">
            <Row>
              <ListNav
                href="/settings/accounts/change-password"
                label="비밀번호 변경"
              />
            </Row>
            <Row>
              <ListNav href="/settings/" label="아바타 변경" />
            </Row>
          </Section>

          <Section>
            <Row>
              <ListAction
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                label="로그아웃"
              ></ListAction>
            </Row>
          </Section>
        </List>
      </div>
    </>
  );
}
