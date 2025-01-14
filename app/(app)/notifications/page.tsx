import { Button } from "@/components/ui/button";
import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/list";
import { getNotifications } from "./_actions/get-notifications";
import { getPushNotificationSettings } from "./_actions/get-push-notification-settings";
import { PushNotificationOnboarding } from "./_components/push-notification-onboarding";
import { Container, Wrapper } from "@/components/container";

export default async function Page() {
  const { fcmToken } = getPushNotificationSettings();
  let notifications = [];

  try {
    notifications = await getNotifications();
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
            <ListItem
              key={notification.notificationId}
              containerClassName="active:bg-accent"
            >
              <button className="text-left">
                {notification.is_read ? "read" : "new"}
                {notification.content} - {notification.type} -{" "}
                {/* <UpdateNotificationButton
                action={`mark-read/${notification.id}`}
              /> */}
              </button>
            </ListItem>
          ))}
        </Section>
        <Section header=" ">
          <Button className="mx-4">모두 읽기</Button>
        </Section>
      </List>
      <div>
        {notifications.length === 0 ? <p>알림이 없습니다.</p> : <ul></ul>}
      </div>
    </>
  );
}
