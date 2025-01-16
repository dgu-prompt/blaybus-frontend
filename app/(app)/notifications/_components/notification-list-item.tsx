"use client";

import { useState } from "react";
import { ListItem } from "@/components/list";
import { setNotificationRead } from "../_actions/set-notification-read";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

function NotificationIndicator({ isRead }: { isRead: boolean }) {
  return isRead ? (
    <div className="size-2 shrink-0 rounded-full"></div>
  ) : (
    <div className="my-2 size-2 shrink-0 rounded-full bg-blue-400"></div>
  );
}

export function NotificationListItem({
  notification,
}: {
  notification: {
    notificationId: string;
    content: string;
    updated_at: string;
    created_at: string;
    is_read: boolean;
    type: string;
  };
}) {
  const [isRead, setIsRead] = useState<boolean>(notification.is_read);

  const updatedAtRelative = notification.updated_at
    ? formatDistanceToNow(new Date(notification.updated_at), {
        addSuffix: true,
        locale: ko,
      })
    : null;

  return (
    <ListItem
      key={notification.notificationId}
      containerClassName="active:bg-accent"
    >
      <button
        className="items-top flex w-full gap-2 text-left"
        onClick={async () => {
          await setNotificationRead(notification.notificationId);
          setIsRead(true);
        }}
      >
        <NotificationIndicator isRead={isRead} />
        {notification.content}
        <span className="ml-auto mt-0.5 shrink-0 text-sm text-muted-foreground">
          {updatedAtRelative}
        </span>
      </button>
    </ListItem>
  );
}
