"use client";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
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

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function NotificationDrawer({
  params,
}: {
  params: { notificationID: string };
}) {
  const router = useRouter();

  return (
    <Drawer open={true} onOpenChange={() => router.back()}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Notification Title</DrawerTitle>
            <DrawerDescription>
              Notification Description Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Vel, explicabo libero quia totam vitae quod,
              voluptates modi dolores nesciunt perspiciatis minima provident
              alias magnam dicta pariatur soluta iure mollitia. Voluptatum?
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
