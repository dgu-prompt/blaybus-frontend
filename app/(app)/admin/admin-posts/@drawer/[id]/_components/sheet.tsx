"use client";

import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function AccountChangeSheet() {
  const router = useRouter();

  // const handleSubmit = async () => {}

  return (
    <Sheet open={true} onOpenChange={() => router.back()}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>포스트 1 수정</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 pb-8 pt-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="title">제목</Label>
            <Input id="title" type="text" placeholder="글 제목..." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="content">내용</Label>
            <Textarea id="content" placeholder="글 내용..." />
          </div>
        </div>
        <SheetFooter>
          <div className="flex w-full flex-col gap-2">
            <Button>게시글 수정</Button>
            <Button variant="outline" className="text-destructive">
              게시글 삭제
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
