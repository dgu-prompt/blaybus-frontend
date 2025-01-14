"use client";

import { useState } from "react";
import { ListItem } from "@/components/list";
import { setNotificationRead } from "../_actions/set-notification-read";

export function NotificationListItem({
  notification,
}: {
  notification: {
    notificationId: string;
    is_read: boolean;
    content: string;
    type: string;
  };
}) {
  const [isRead, setIsRead] = useState<boolean>(notification.is_read);

  return (
    <ListItem
      key={notification.notificationId}
      containerClassName="active:bg-accent"
    >
      <button
        className="text-left"
        onClick={async () => {
          await setNotificationRead(notification.notificationId);
          setIsRead(true);
        }}
      >
        {isRead ? "read" : "new"}
        {notification.content} - {notification.type} -{" "}
        {/* <UpdateNotificationButton
                action={`mark-read/${notification.id}`}
              /> */}
      </button>
    </ListItem>
  );
}
