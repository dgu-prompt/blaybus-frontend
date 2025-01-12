import { Container, Wrapper } from "@/components/container";
import { Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, LabelList } from "recharts";

const chartData = [
  { week: 1, expDo: 80 },
  { week: 2, expDo: 60 },
  { week: 3, expDo: 70 },
  { week: 4, expDo: 90 },
  { week: 5, expDo: 80, fill: "hsl(var(--chart-3))" },
];

export function MiniBarChart({
  data,
}: {
  data: { week: number; expDo: number; fill?: string }[];
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
              <div className="flex items-center gap-2 text-chart-3">
                <Briefcase className="h-5 w-5" />
                <span className="font-semibold">{title}</span>
              </div>
            </div>

            {/* Right: Chevron */}
            <div className="flex">
              {/* <div className="text-sm text-muted-foreground">{subtitle}</div> */}
              {/* <LinkChevron /> */}
            </div>
          </div>

          {/* Chart and Score */}
          <div className="flex w-full items-end justify-between px-4 pb-2.5">
            <div className="flex h-[50px] items-end">
              <span>참여중인 전사 프로젝트가 없습니다.</span>
            </div>
          </div>
        </Wrapper>
      </Container>
    </Link>
  );
}

export default function Page() {
  return (
    <CustomListItem
      title="전사 프로젝트"
      subtitle="27주차"
      chartData={chartData}
      score={80}
      href="/job-quest-details"
    />
  );
}
