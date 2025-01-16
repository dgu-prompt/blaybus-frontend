"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function DelayedProgress({ progress }: { progress: number }) {
  const [delayedProgress, setDelayedProgress] = useState(0);
  const timeout = 20 * progress;

  useEffect(() => {
    const timer = setTimeout(() => setDelayedProgress(progress), timeout);
    return () => clearTimeout(timer);
  }, [progress, timeout]);

  return <Progress value={delayedProgress} className="h-4" />;
}
