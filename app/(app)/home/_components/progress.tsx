import { Progress } from "@/components/ui/progress";
import { fetchWithAuth } from "@/lib/fetch-with-auth";

export async function getExpsSummary() {
  try {
    const response = await fetchWithAuth("/api/exps/summary");
    if (!response.ok) {
      throw new Error("Failed to fetch exps summary.");
    }
    return await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch exps summary.");
  }
}

export async function ExpProgress() {
  const data = await getExpsSummary();
  const { totalExp, requiredExp, recentLv, nextLv } = data;
  const progress = (totalExp / requiredExp) * 100;
  const leftExp = requiredExp - totalExp;
  const formattedLeftExp = new Intl.NumberFormat("ko-KR").format(leftExp);

  return (
    <div className="mt-2 flex w-full flex-col gap-2">
      <div className="flex justify-between text-xs font-semibold">
        <div>{recentLv}</div>
        <div>{nextLv}</div>
      </div>
      <Progress value={progress} className="h-4" />
      <div className="flex justify-end text-xs text-muted-foreground">
        {totalExp?.toLocaleString?.() || "0"} (
        {isNaN(progress) ? "0" : progress.toFixed(2)}%)
      </div>
      <div className="text-sm text-muted-foreground">
        다음 레벨까지 {formattedLeftExp} do 남았습니다.
      </div>
    </div>
  );
}
