import NotificationDrawer from "./notification-drawer";

export default async function NotificationPage({
  params,
}: {
  params: { notificationID: string };
}) {
  return <NotificationDrawer notification={{ title: "d", description: "d" }} />;
}
