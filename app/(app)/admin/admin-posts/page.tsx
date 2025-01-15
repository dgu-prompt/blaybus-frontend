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
import { List, ListAction, ListNav, Row, Section } from "@/components/listv0";
import { PlusIcon } from "lucide-react";

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

const postData = [
  {
    id: "1",
    title: "포스트 1",
    content: "안녕하세요",
  },
  {
    id: "2",
    title: "게시글 테스트",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque maxime eligendi pariatur aliquid expedita cupiditate, sequi accusamus! Molestiae, similique dolores, animi maxime natus fuga saepe suscipit alias dicta optio magni!",
  },
  {
    id: "3",
    title: "hello",
    content: "world",
  },
];

export default function Page() {
  return (
    <>
      <Header title="게시글 관리" showBackButton>
        <PlusIcon className="h-6 w-6" />
      </Header>
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
            {postData.map((post) => (
              <Row key={post.id}>
                <ListNav
                  href={`/settings/admin-posts/${post.id}`}
                  label={post.title}
                ></ListNav>
              </Row>
            ))}
          </Section>
        </List>
      </div>
    </>
  );
}
