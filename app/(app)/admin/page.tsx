import { List, ListItem, ListLink, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";

export default function Page() {
  return (
    <>
      <NavigationBar title="관리자" noBackButton />
      <List>
        <Section header="관리자">
          <ListItem title="구성원 관리" href="/admin/accounts/" />
          <ListItem title="알림 관리" href="/admin/notifications" />
          <ListItem title="게시글 관리" href="/admin/posts" />
          <ListLink title="Google Sheet 지금 동기화" href="#" />
        </Section>
        <Section header="개발자">
          <ListItem title="푸시 알림 테스트" href="/admin/push-test" />
        </Section>
      </List>
    </>
  );
}
