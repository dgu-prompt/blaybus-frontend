import { BarChart, Bar } from "recharts";
import { Briefcase } from "lucide-react";

const chartData = [
  { week: 1, expDo: 80 },
  { week: 2, expDo: 60 },
  { week: 3, expDo: 70 },
  { week: 4, expDo: 90 },
];

function MiniBarChart() {
  return (
    <BarChart width={100} height={50} data={chartData} barCategoryGap="10%">
      <Bar dataKey="expDo" radius={[4, 4, 0, 0]} fill="hsl(var(--chart-1))" />
    </BarChart>
  );
}

export default function Page() {
  return (
    <MultilineListItem href="/details">
      <Upper title="직무 퀘스트" subtitle="27주차" icon={Briefcase} />
      <Lower
        leftContent={
          <div>
            <span className="text-2xl font-semibold">80</span>
            <span className="text-base"> do</span>
          </div>
        }
        rightContent={<MiniBarChart />}
      />
    </MultilineListItem>
  );
}
