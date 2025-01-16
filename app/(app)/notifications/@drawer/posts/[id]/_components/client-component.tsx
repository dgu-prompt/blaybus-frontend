"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export default function ClientComponent({
  post,
}: {
  post: {
    title: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}) {
  const router = useRouter();
  const timestamp = post.updatedAt ? post.updatedAt : post.createdAt;
  const relativeTimestamp = timestamp
    ? formatDistanceToNow(new Date(timestamp), {
        addSuffix: true,
        locale: ko,
      })
    : null;

  return (
    <Drawer open={true} onOpenChange={() => router.back()}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <span hidden>
              <DrawerTitle>{post.title}</DrawerTitle>
            </span>
            <span className="text-start text-lg font-medium">{post.title}</span>
            <span className="text-start text-sm text-muted-foreground">
              {relativeTimestamp}
            </span>
            <span className="text-start text-muted-foreground">
              {post.content}
            </span>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
