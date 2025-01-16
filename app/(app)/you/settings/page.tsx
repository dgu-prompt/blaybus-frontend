import {
  List,
  ListButton,
  ListItem,
  ListLink,
  Section,
} from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";
import { handleLogoutAction } from "./_actions/logout-action";

export default function Page() {
  return (
    <>
      <NavigationBar title="설정" />
      <List>
        <Section header="계정 설정">
          <ListItem
            title="비밀번호 변경"
            href="/you/settings/change-password"
          />
        </Section>
        <Section header="앱 설정">
          {/* <ListItem title="알림" href="/you/settings/notifications" /> */}
          <ListItem title="앱 테마" href="/you/settings/theme" />
          {/* <ListItem title="언어 (구현 예정)" href="/settings/language" /> */}
        </Section>
        <Section header="앱 정보">
          <ListItem title="두더디 버전" detail="1.0.0" />
          <ListLink title="문의하기" href="#" />
        </Section>
        <Section>
          <ListButton title="로그아웃" onClick={handleLogoutAction} />
        </Section>
      </List>
    </>
  );
}
