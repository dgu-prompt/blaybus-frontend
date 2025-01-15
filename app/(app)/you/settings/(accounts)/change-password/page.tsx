import { List, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";

export default function Page() {
  return (
    <>
      <NavigationBar title="비밀번호 변경" />
      <List>
        <Section>
          <ChangePasswordForm />
        </Section>
      </List>
    </>
  );
}
