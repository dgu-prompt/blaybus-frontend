import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/list";
import { getNotifications } from "./_actions/get-notifications";
import { getPushNotificationSettings } from "./_actions/get-push-notification-settings";
import { PushNotificationOnboarding } from "./_components/push-notification-onboarding";
import { Container, Wrapper } from "@/components/container";
import { setNotificationRead } from "./_actions/set-notification-read";
import { NotificationListItem } from "./_components/notification-list-item";
import { NotificationReadAllButton } from "./_components/notification-read-all-button";

export default async function Page() {
  const { fcmToken } = getPushNotificationSettings();
  let notifications = [];

  try {
    notifications = await getNotifications();
    console.log(notifications);
  } catch (error) {
    console.error("Failed to load notifications:", error);
  }

  // const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <>
      <NavigationBar title="알림" noBackButton />
      <Container>
        <Wrapper className="px-safe-or-4">
          {fcmToken}

          <PushNotificationOnboarding fcmToken={fcmToken} />
        </Wrapper>
      </Container>
      <List>
        <Section header="최근 7일간 알림">
          {notifications.map((notification: any) => (
            <NotificationListItem
              key={notification.notificationId}
              notification={notification}
            />
          ))}
          <div className="mb-4" />
        </Section>
        <Section>
          <NotificationReadAllButton />
        </Section>
      </List>
      <div>
        {notifications.length === 0 ? <p>알림이 없습니다.</p> : <ul></ul>}
      </div>
    </>
  );
}
