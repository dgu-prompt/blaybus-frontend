"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="pt-safe">
      <Button
        onClick={() => {
          toast("hi");
        }}
      >
        토스트 출력asdadsㅁㄴㅇㅍㅊㅊㅌㅍㄹㄹㅁㄴㅇㅁㄴㄹㅇ
      </Button>
    </div>
  );
}
