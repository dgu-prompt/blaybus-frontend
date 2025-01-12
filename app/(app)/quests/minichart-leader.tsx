import { Container, Wrapper } from "@/components/container";
import { Briefcase, ChevronRight, HandHeart } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, LabelList } from "recharts";

const chartData = [
  { month: 1, expDo: 100 },
  { month: 2, expDo: 1 },
  { month: 3, expDo: 1 },
  { month: 4, expDo: 50, fill: "hsl(var(--chart-2))" },
];

export function MiniBarChart({
  data,
}: {
  data: { month: number; expDo: number; fill?: string }[];
}) {
  return (
    <BarChart
      width={100}
      height={50}
      data={data}
      barCategoryGap="10%"
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <Bar
        dataKey="expDo"
        radius={[4, 4, 0, 0]}
        fill="hsl(var(--border))"
        background={{ fill: "transparent" }}
      />
    </BarChart>
  );
}

function LinkChevron() {
  return (
    <div className="-m-3 p-3">
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </div>
  );
}

export function CustomListItem({
  title,
  subtitle,
  chartData,
  highlightIndex,
  score,
  href,
}: {
  title: string;
  subtitle: string;
  chartData: { label: string; value: number }[];
  score: number;
  href?: string;
}) {
  return (
    <Link href={href}>
      <Container className="hover:bg-accent active:bg-accent">
        <Wrapper className="border-b">
          <div className="flex min-h-14 items-center justify-between px-4 py-2">
            {/* Left: Title and Subtitle */}
            <div>
              <div className="flex items-center gap-2 text-chart-2">
                <HandHeart className="h-5 w-5" />
                <span className="font-semibold">{title}</span>
              </div>
            </div>

            {/* Right: Chevron */}
            <div className="flex">
              <div className="text-sm text-muted-foreground">{subtitle}</div>
              <LinkChevron />
            </div>
          </div>

          {/* Chart and Score */}
          <div className="flex w-full items-end justify-between px-4 pb-2.5">
            <span>
              <span className="text-2xl font-semibold">{score}</span>
              <span className="text-base"> do</span>
            </span>
            <MiniBarChart data={chartData} />
          </div>
        </Wrapper>
      </Container>
    </Link>
  );
}

export default function Page() {
  return (
    <CustomListItem
      title="월 특근 퀘스트"
      subtitle="4월"
      chartData={chartData}
      score={100}
      href="/job-quest-details"
    />
  );
}
