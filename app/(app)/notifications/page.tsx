import { BellRing, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Header } from "@/components/header";
import Link from "next/link";
import { NavigationBar } from "@/components/navigation-bar";
import { Container, Wrapper } from "@/components/container";
import { List, ListItem, Section } from "@/components/list";
import { getNotifications } from "./_actions/get-notifications";
import { cn } from "@/lib/utils";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
    isRead: false,
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
    isRead: false,
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
    isRead: false,
  },
  {
    title: "Weekly summary ready.",
    description: "3 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
  {
    title: "Your payment was successful.",
    description: "5 days ago",
    isRead: true,
  },
];

export default async function Page() {
  let notifications = [];

  try {
    notifications = await getNotifications();
    console.log(notifications);
  } catch (error) {
    console.error("Failed to load notifications:", error);
  }

  // const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <>
      <NavigationBar title="알림" noBackButton />
      <List>
        <Section header="최근 7일간 알림">
          {notifications.map((notification: any) => (
            <ListItem key={notification.notificationId}>
              {notification.is_read ? "read" : "new"}
              {notification.content} - {notification.type} -{" "}
              {/* <UpdateNotificationButton
                action={`mark-read/${notification.id}`}
              /> */}
            </ListItem>
          ))}
        </Section>
        <Section>
          <Button>모읽음</Button>
        </Section>
      </List>
      <div>
        {notifications.length === 0 ? <p>알림이 없습니다.</p> : <ul></ul>}
      </div>
    </>
  );

  return (
    <>
      <NavigationBar title="알림" noBackButton />
      <List>
        <Section
          header="Major Pacific Ocean Seas"
          footer="Apps and websites will use the first language in this list that they support."
        >
          <ListItem>hi</ListItem>
          <ListItem>hi</ListItem>
          <ListItem>hi</ListItem>
          <ListItem>hi</ListItem>
          <ListItem>hi</ListItem>
          <ListItem href="#">
            <div className="flex w-full justify-between">
              <span>Title</span>
              <span className="text-muted-foreground">Trailing</span>
            </div>
          </ListItem>
        </Section>
        <Section>
          {notifications.map((notification, index) => (
            // <div key={index} className="items-start">
            //   {/* Indicator */}
            //   <span
            //     className={`flex h-2 w-2 translate-y-1 rounded-full ${
            //       notification.isRead ? "bg-gray-400" : "bg-sky-500"
            //     }`}
            //   />
            //   {/* 알림 내용 */}
            //   <div className="space-y-1">
            //     <Link href={`/notifications/${index}`}>
            //       <p className="text-sm font-semibold leading-none">
            //         {notification.title}
            //       </p>
            //     </Link>
            //     <p className="text-sm text-muted-foreground">
            //       {notification.description}
            //     </p>
            //   </div>
            // </div>
            <ListItem
              key={index}
              className="ml-4 flex min-h-11 items-center border-b pr-4"
            >
              {notification.title}
            </ListItem>
          ))}
        </Section>
        <Section
          header={
            <div className="ml-4 flex items-center border-b py-2 pr-4 text-sm font-semibold text-muted-foreground">
              Major Pacific Ocean Seas
            </div>
          }
          footer={
            <div className="ml-4 flex items-center py-2 pr-4 text-sm font-semibold text-muted-foreground">
              Apps and websites will use the first language in this list that
              they support.
            </div>
          }
        >
          <div className="ml-4 flex min-h-11 items-center border-b pr-4">
            hi
          </div>
        </Section>
        <Section
          header="Major Pacific Ocean Seas"
          footer={
            <div className="ml-4 flex items-center py-2 pr-4 text-sm font-semibold text-muted-foreground">
              Apps and websites will use the first language in this list that
              they support.
            </div>
          }
        >
          <div className="ml-4 flex min-h-11 items-center border-b pr-4">
            hi
          </div>
        </Section>
        <Section>
          <div className="ml-4 flex min-h-11 items-center border-b pr-4">
            hi
          </div>
        </Section>
      </List>
    </>
  );
}

// <div className="w-full max-w-screen-sm px-4">
// {/* 제목 */}
// <div className="flex flex-col space-y-1.5 py-6">
//   <div className="font-semibold leading-none tracking-tight">
//     Notifications
//   </div>
//   <p className="text-sm text-muted-foreground">
//     You have {unreadCount} unread messages.
//   </p>
// </div>

// {/* 푸시 알림 */}
// <div className="grid gap-4 pb-6">
//   <div className="flex items-center space-x-4 rounded-md border p-4">
//     <BellRing />
//     <div className="flex-1 space-y-1">
//       <p className="text-sm font-semibold leading-none">
//         Push Notifications
//       </p>
//       <p className="text-sm text-muted-foreground">
//         Send notifications to device.
//       </p>
//     </div>
//     <Switch />
//   </div>

//   {/* 알림 리스트 */}
//   <div>
//     {notifications.map((notification, index) => (
//       <div
//         key={index}
//         className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
//       >
//         {/* Indicator */}
//         <span
//           className={`flex h-2 w-2 translate-y-1 rounded-full ${
//             notification.isRead ? "bg-gray-400" : "bg-sky-500"
//           }`}
//         />
//         {/* 알림 내용 */}
//         <div className="space-y-1">
//           <Link href={`/notifications/${index}`}>
//             <p className="text-sm font-semibold leading-none">
//               {notification.title}
//             </p>
//           </Link>
//           <p className="text-sm text-muted-foreground">
//             {notification.description}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

// <div className="flex items-center">
//   <Button className="w-full">
//     <Check /> Mark all as read
//   </Button>
// </div>
// </div>
