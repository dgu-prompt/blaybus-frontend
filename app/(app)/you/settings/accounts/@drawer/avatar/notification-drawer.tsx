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
            <DrawerTitle className="text-start">
              {notification.title}
            </DrawerTitle>
            <DrawerDescription className="text-start">
              {notification.description}
            </DrawerDescription>
          </DrawerHeader>
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
