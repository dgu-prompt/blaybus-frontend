import { Container, Wrapper } from "@/components/container";
import { Button } from "@/components/ui/button";
import { setNotificationReadAll } from "../_actions/set-notification-read-all";

export function NotificationReadAllButton() {
  return (
    <Container>
      <Wrapper className="px-safe-or-4">
        <Button variant="secondary" onClick={setNotificationReadAll}>
          모두 읽음으로 표시
        </Button>
      </Wrapper>
    </Container>
  );
}
