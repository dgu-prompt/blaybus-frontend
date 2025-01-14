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
          <ListItem title="비밀번호 변경" href="#" />
        </Section>
        <Section header="앱 설정">
          <ListItem title="알림" href="/you/settings/notifications" />
          <ListItem title="앱 테마" href="/you/settings/theme" />
          {/* <ListItem title="언어 (구현 예정)" href="/settings/language" /> */}
        </Section>
        <Section header="관리자">
          <ListItem title="회원 관리" href="/settings/notifications" />
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
