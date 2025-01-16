import { List, ListItem, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";
import { SyncGoogleSheetsButton } from "./_components/sync-google-sheets-button";

export default function Page() {
  return (
    <>
      <NavigationBar title="관리자" noBackButton />
      <List>
        <Section header="관리자">
          <ListItem title="구성원 관리" href="/admin/accounts/" />
          <ListItem title="알림 관리" href="/admin/notifications" />
          <ListItem title="게시글 관리" href="/admin/posts" />
          <SyncGoogleSheetsButton />
        </Section>
        <Section header="개발자">
          <ListItem title="테스트" href="/admin/test" />
          <ListItem title="푸시 알림 테스트" href="/admin/push-test" />
        </Section>
      </List>
    </>
  );
}
