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
          <ListItem title="게시글 관리" href="/admin/posts" />
          <SyncGoogleSheetsButton />
        </Section>
      </List>
    </>
  );
}
