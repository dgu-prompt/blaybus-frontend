import { NavigationBar } from "@/components/navigation-bar";
import { List, Section } from "@/components/list";
import { getNotifications } from "./_actions/get-notifications";
import { getPushNotificationSettings } from "./_actions/get-push-notification-settings";
import { PushNotificationOnboarding } from "./_components/push-notification-onboarding";
import { Container, Wrapper } from "@/components/container";
import { NotificationListItem } from "./_components/notification-list-item";
import { NotificationReadAllButton } from "./_components/notification-read-all-button";
import { PostListItem } from "./_components/post-list-item";
import { getPosts } from "./_actions/get-posts";

interface Notification {
  notificationId: string;
  is_read: boolean;
  content: string;
  type: string;
}

interface Post {
  id: string;
  postTitle: string;
  content: string;
}

export default async function Page() {
  const { fcmToken } = await getPushNotificationSettings();
  const notifications = await getNotifications();
  const posts = await getPosts();

  // const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <>
      <NavigationBar title="알림" noBackButton />
      {!fcmToken && (
        <Container>
          <Wrapper className="px-safe-or-4">
            <PushNotificationOnboarding />
          </Wrapper>
        </Container>
      )}
      <List>
        {notifications.length !== 0 && (
          <>
            <Section header="최근 7일간 알림">
              {notifications.map((notification: Notification) => (
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
          </>
        )}

        <Section header="게시판">
          {posts.map((post: Post) => (
            <PostListItem key={post.id} post={post} />
          ))}
          <div className="mb-4" />
        </Section>
      </List>
    </>
  );
}
