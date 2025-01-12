import NotificationDrawer from "./notification-drawer";

export default async function NotificationPage({
  params,
}: {
  params: { notificationID: string };
}) {
  // 서버에서 알림 데이터 가져오기
  const res = await fetch(
    `https://api.example.com/notifications/${params.notificationID}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return <div>Error loading notification</div>;
  }

  const notification = await res.json();

  return (
    <NotificationDrawer
      notification={notification}
      notificationID={params.notificationID}
    />
  );
}
