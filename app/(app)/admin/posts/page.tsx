import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem } from "@/components/grouped-list";
import { NewButton } from "./_components/new-button";

export default async function Page() {
  return (
    <>
      <NavigationBar title="게시글 관리" actionButton={<NewButton />} />

      <List>
        <ListItem title="API 구현 예정" />
      </List>
    </>
  );
}
