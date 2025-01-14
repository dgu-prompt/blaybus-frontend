// "use client";

// import { useState } from "react";
// import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ChartContainer } from "@/components/ui/chart";

// export function JobQuestChart({
//   chartData,
// }: {
//   chartData: Record<string, ChartDataItem[]>;
// }) {
//   const [activeTab, setActiveTab] = useState<"4주" | "3개월">("4주");

//   return (
//     <Tabs value={activeTab} onValueChange={setActiveTab}>
//       <TabsList>
//         {Object.keys(chartData).map((key) => (
//           <TabsTrigger key={key} value={key}>
//             {key}
//           </TabsTrigger>
//         ))}
//       </TabsList>
//       {Object.entries(chartData).map(([tab, data]) => (
//         <TabsContent key={tab} value={tab}>
//           <ChartContainer className="max-h-[300px] w-full">
//             <BarChart data={data}>
//               <CartesianGrid vertical={false} />
//               <XAxis dataKey="period" tickLine={false} axisLine={false} />
//               <Bar
//                 dataKey="points"
//                 fill="hsl(var(--chart-1))"
//                 radius={[8, 8, 0, 0]}
//               >
//                 <LabelList
//                   dataKey="points"
//                   position="top"
//                   offset={10}
//                   className="fill-foreground font-semibold"
//                   formatter={(value) => `${value}점`}
//                 />
//               </Bar>
//               <LabelList
//                 dataKey="max"
//                 position="top"
//                 offset={-10}
//                 className="fill-blue-500 font-bold"
//                 formatter={(value) => `Max: ${value}`}
//               />
//               <LabelList
//                 dataKey="median"
//                 position="top"
//                 offset={-30}
//                 className="fill-green-500 font-bold"
//                 formatter={(value) => `Med: ${value}`}
//               />
//             </BarChart>
//           </ChartContainer>
//         </TabsContent>
//       ))}
//     </Tabs>
//   );
// }
