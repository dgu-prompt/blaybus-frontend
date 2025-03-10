import { NavigationBar } from "@/components/navigation-bar";
import { List, Section } from "@/components/list";
import { getNotifications } from "./_actions/get-notifications";
import { getPushNotificationSettings } from "./_actions/get-push-notification-settings";
import { PushNotificationOnboarding } from "./_components/push-notification-onboarding";
import { Container, Wrapper } from "@/components/container";
import { NotificationListItem } from "./_components/notification-list-item";
import { NotificationReadAllButton } from "./_components/notification-read-all-button";
import { PostListItem } from "./_components/post-list-item";
import { fetchAllPosts } from "./_actions/get-posts";
import { ListItem } from "@/components/list";

interface Notification {
  notificationId: string;
  content: string;
  updated_at: string;
  created_at: string;
  is_read: boolean;
  type: string;
}

interface Post {
  postId: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export default async function Page() {
  const { fcmToken } = await getPushNotificationSettings();
  const notifications = await getNotifications();
  const posts = await fetchAllPosts();

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
        <Section header="최근 7일간 알림">
          {notifications.length === 0 ? (
            <ListItem>최근 7일간 받은 알림이 없습니다.</ListItem>
          ) : (
            <>
              {notifications.map((notification: Notification) => (
                <NotificationListItem
                  key={notification.notificationId}
                  notification={notification}
                />
              ))}
            </>
          )}
          <div className="mb-4" />
        </Section>
        {notifications.length > 0 && (
          <Section>
            <NotificationReadAllButton />
          </Section>
        )}
        <Section header="게시판">
          {posts.map((post: Post) => (
            <PostListItem key={post.postId} post={post} />
          ))}
          <div key="0" className="mb-4" />
        </Section>
      </List>
    </>
  );
}
