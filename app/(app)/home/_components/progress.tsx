"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ExpProgress({
  currentExp,
  maxExp,
}: {
  currentExp: number;
  maxExp: number;
}) {
  const progress = (currentExp / maxExp) * 100;

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex justify-between text-xs font-semibold">
        <div>F1-I</div>
        <div>F1-II</div>
      </div>
      <Progress value={progress} className="h-4" />
      <div className="flex justify-end text-xs text-muted-foreground">
        {currentExp.toLocaleString()} ({progress.toPrecision(4)}%)
      </div>
      <div className="text-sm text-muted-foreground">
        다음 레벨까지 380 do 남았습니다.
      </div>
    </div>
  );
}
