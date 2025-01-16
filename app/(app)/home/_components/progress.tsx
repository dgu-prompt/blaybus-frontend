import { getExpsSummary } from "../_actions/get-exps-summary";
import { DelayedProgress } from "./delayed-progress";

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
      <DelayedProgress progress={progress} />
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
