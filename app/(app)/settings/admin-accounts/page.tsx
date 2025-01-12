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

const accountData = [
  {
    id: "2023010101",
    name: "김민수",
  },
  {
    id: "2023010102",
    name: "박철수",
  },
  {
    id: "2023010104",
    name: "김영희",
  },
];

export default function Page() {
  return (
    <>
      <NavigationBar title="회원 관리" />
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
            {accountData.map((account) => (
              <Row key={account.id}>
                <ListNav
                  href={`/settings/admin-accounts/${account.id}`}
                  label={account.name}
                />
              </Row>
            ))}
          </Section>
        </List>
      </div>
    </>
  );
}
