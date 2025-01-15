import { NavigationBar } from "@/components/navigation-bar";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Welcome to the community!",
    content: "We are excited to have you here. Feel free to ask questions.",
    isRead: false,
  },
  {
    title: "Weekly Update",
    content: "This week we have introduced new features for our users.",
    isRead: false,
  },
  {
    title: "Server Maintenance",
    content: "We will be performing server maintenance this Sunday at 2 AM.",
    isRead: true,
  },
  {
    title: "Feature Request",
    content: "Let us know what features you'd like to see in future updates.",
    isRead: true,
  },
];

export default function BoardPage() {
  const unreadCount = posts.filter((post) => !post.isRead).length;

  return (
    <>
      <Header title="게시판" />
      <div className="w-full max-w-screen-sm px-4">
        {/* 제목 */}
        <div className="flex flex-col space-y-1.5 py-6">
          <div className="font-semibold leading-none tracking-tight">
            Community Board
          </div>
          <p className="text-sm text-muted-foreground">
            You have {unreadCount} unread posts.
          </p>
        </div>
        {/* 게시글 리스트 */}
        <div className="grid gap-4 pb-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-md border p-4"
            >
              {/* Indicator */}
              <div className="flex items-center">
                <span
                  className={`flex h-2 w-2 rounded-full ${
                    post.isRead ? "bg-gray-400" : "bg-sky-500"
                  }`}
                />
                <h2 className="ml-2 text-sm font-semibold leading-none">
                  {post.title}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">{post.content}</p>
            </div>
          ))}
        </div>
        {/* 플로팅 버튼 */}
        <div className="sticky bottom-4 z-10 flex items-center pb-6">
          <Button className="w-full">Add new post</Button>
        </div>
      </div>
    </>
  );
}
