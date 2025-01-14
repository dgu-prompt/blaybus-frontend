import NotificationDrawer from "./_components/drawer";
import { AccountChangeSheet } from "./_components/sheet";

export default async function NotificationPage({
  params,
}: {
  params: { id: string };
}) {
  // // 서버에서 알림 데이터 가져오기
  // const res = await fetch(
  //   `https://api.example.com/notifications/${params.notificationID}`,
  //   { cache: "no-store" },
  // );

  // if (!res.ok) {
  //   return <div>Error loading notification</div>;
  // }

  // const notification = await res.json();

  return <AccountChangeSheet />;
}
