import { HStack } from "@/components/grouped-list";
import { getExpsSummary } from "../_actions/get-exps-summary";
import { ExperienceProgressChart } from "./experience-progress-chart";
import { TrendingUp } from "lucide-react";

export async function ExperienceProgress() {
  const data = await getExpsSummary();
  const thisYear = 2024;
  const lastYear = thisYear - 1;
  const trendPercent = (data.totalExp / data.prevYearExp) * 100;

  const chartData = [
    { year: lastYear, expDo: data.prevYearExp },
    { year: thisYear, expDo: data.totalExp },
  ];

  return (
    <>
      <ExperienceProgressChart data={chartData} />

      <HStack className="text-sm text-muted-foreground">
        작년 대비 {trendPercent.toFixed(0)}% 증가{" "}
        <TrendingUp className="h-4 w-4" />
      </HStack>
    </>
  );
}
