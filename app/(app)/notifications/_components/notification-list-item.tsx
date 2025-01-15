"use client";

import { useState } from "react";
import { ListItem } from "@/components/list";
import { setNotificationRead } from "../_actions/set-notification-read";

function NotificationIndicator({ isRead }: { isRead: boolean }) {
  return isRead ? (
    <div className="size-2 rounded-full"></div>
  ) : (
    <div className="size-2 rounded-full bg-blue-400"></div>
  );
}

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
        className="flex items-center gap-2 text-left"
        onClick={async () => {
          await setNotificationRead(notification.notificationId);
          setIsRead(true);
        }}
      >
        <NotificationIndicator isRead={isRead} />
        {notification.content}
        {/* <UpdateNotificationButton
                action={`mark-read/${notification.id}`}
              /> */}
      </button>
    </ListItem>
  );
}
