import { List, ListItem, ListLink, Section } from "@/components/grouped-list";
import { NavigationBar } from "@/components/navigation-bar";

export default function Page() {
  return (
    <>
      <NavigationBar title="관리자" noBackButton />
      <List>
        <Section header="관리자">
          <ListItem title="회원 관리" href="/admin/accounts/" />
          <ListItem title=" 게시글 관리" href="/settings/display" />
          <ListItem title="알림 관리" href="/settings/language" />
          <ListLink title="Google Sheet 지금 동기화" href="#" />
        </Section>
        <Section header="개발자">
          <ListItem title="테스트 페이지" href="/you/settings/lab" />
          <ListItem title="푸시 알림 테스트" href="/you/settings/push-test" />
          <ListItem title="로그인" href="/login" />
          <ListItem title="로그인 정보 확인" href="/you/settings/auth-test" />
          <ListItem
            title="헤더 API 요청 확인"
            href="/you/settings/auth-mutation-test"
          />
        </Section>
      </List>
    </>
  );
}
