"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AccountChangeForm } from "./form";

export default function NotificationDrawer({
  notification,
  notificationID,
}: {
  notification: { title: string; description: string };
  notificationID: string;
}) {
  const router = useRouter();

  const markAsRead = async () => {
    const res = await fetch(
      `https://api.example.com/notifications/${notificationID}/read`,
      { method: "PUT" },
    );

    if (!res.ok) {
      console.error("Failed to mark notification as read");
    }
  };

  return (
    <Drawer open={true} onOpenChange={() => router.back()}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-start">회원 이름</DrawerTitle>
            <DrawerDescription className="text-start">
              회원 아이디
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <AccountChangeForm />
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
            <div>
              <Input type="text" />
            </div>
          </div>
          <DrawerFooter>
            <Button variant="outline" onClick={markAsRead}>
              Mark as Read
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
