import { NavigationBar } from "@/components/navigation-bar";
import { ExperienceChart } from "./_components/chart";
import ExperienceProgress from "./_components/chart2";

export default function Page() {
  return (
    <>
      <NavigationBar title="경험치" />

      <ExperienceChart />
      <ExperienceProgress />
    </>
  );
}

// <ExperienceChart />
//           <Container className="grow">
//             <Wrapper className="gap-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>📊 경험치 현황</CardTitle>
//                   <CardDescription>
//                     작년까지와 올해의 경험치 상태
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {/* 작년까지 누적된 경험치 */}
//                   <div className="mb-4">
//                     <p className="text-sm text-gray-500">
//                       2023년까지 누적된 경험치 ({progressPrevYear}%)
//                     </p>
//                     <div className="relative h-6 w-full rounded bg-gray-200">
//                       <div
//                         className="absolute h-6 rounded bg-orange-500"
//                         style={{ width: `${progressPrevYear}%` }}
//                       ></div>
//                       <p className="absolute inset-0 flex items-center justify-center font-bold text-white">
//                         {progressPrevYear}%
//                       </p>
//                     </div>
//                   </div>

//                   {/* 올해 획득한 경험치 */}
//                   <div>
//                     <p className="text-sm text-gray-500">
//                       2024년에 획득한 경험치 ({progressCurrentYear}%)
//                     </p>
//                     <div className="relative h-6 w-full rounded bg-gray-200">
//                       <div
//                         className="absolute h-6 rounded bg-orange-500"
//                         style={{ width: `${progressCurrentYear}%` }}
//                       ></div>
//                       <p className="absolute inset-0 flex items-center justify-center font-bold text-white">
//                         {progressCurrentYear}%
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* <div className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-4 text-center text-white">
//                 🎉 레벨 업까지{" "}
//                 <span className="font-bold">
//                   {remainingExp.toLocaleString()} 경험치
//                 </span>
//                 만 더 필요합니다!
//               </div> */}

//               {/* 레벨별 필요 경험치 -> 얘는 상세 페이지로 빼고, 그냥 링크만 남길듯 */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>📋 레벨별 필요 경험치</CardTitle>
//                   <CardDescription>레벨별 누적 경험치 요구량</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-3 gap-4">
//                     {levelData.map((level) => (
//                       <div key={level.level} className="text-sm">
//                         <p className="font-bold text-gray-700">{level.level}</p>
//                         <p className="text-gray-500">
//                           {level.totalExp.toLocaleString()} do
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </Wrapper>
//           </Container>
