import { Container, Wrapper } from "@/components/container";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartData = [
  { bangi: "상반기", d: 1500, c: 1500, b: 1500, a: 1500, s: 1500 },
];

const chartConfig = {
  d: {
    label: "D등급",
    color: "hsl(var(--border))",
  },
  c: {
    label: "C등급",
    color: "hsl(var(--chart-4))",
  },
  b: {
    label: "B등급",
    color: "hsl(var(--border))",
  },
  a: {
    label: "A등급",
    color: "hsl(var(--border))",
  },
  s: {
    label: "S등급",
    color: "hsl(var(--border))",
  },
} satisfies ChartConfig;

export function MiniBarChart({
  data,
}: {
  data: {
    bangi: string;
    d: number;
    c: number;
    b: number;
    a: number;
    s: number;
  }[];
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
        dataKey="d"
        stackId="z"
        radius={[4, 4, 4, 4]}
        fill="hsl(var(--border))"
        background={{ fill: "transparent" }}
      />
      <Bar
        dataKey="c"
        stackId="z"
        radius={[4, 4, 4, 4]}
        fill="hsl(var(--chart-4))"
        background={{ fill: "transparent" }}
      />
      <Bar
        dataKey="b"
        stackId="z"
        radius={[4, 4, 4, 4]}
        fill="hsl(var(--border))"
        background={{ fill: "transparent" }}
      />
      <Bar
        dataKey="a"
        stackId="z"
        radius={[4, 4, 4, 4]}
        fill="hsl(var(--border))"
        background={{ fill: "transparent" }}
      />
      <Bar
        dataKey="s"
        stackId="z"
        radius={[4, 4, 4, 4]}
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
              <div className="flex items-center gap-2 text-chart-4">
                <Briefcase className="h-5 w-5" />
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
      title="인사평가"
      subtitle="상반기"
      chartData={chartData}
      score={1500}
      href="/job-quest-details"
    />
  );
}
