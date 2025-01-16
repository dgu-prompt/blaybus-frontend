import { ListItem } from "@/components/list";
import { HStack, VStack } from "@/components/grouped-list";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export function PostListItem({
  post,
}: {
  post: {
    postId: string;
    title: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
  };
}) {
  const timestamp = post.updatedAt ? post.updatedAt : post.createdAt;
  const relativeTimestamp = timestamp
    ? formatDistanceToNow(new Date(timestamp), {
        addSuffix: true,
        locale: ko,
      })
    : null;

  return (
    <ListItem
      key={post.postId}
      containerClassName="active:bg-accent"
      href={`/notifications/posts/${post.postId}`}
    >
      <VStack>
        <HStack className="items-start gap-4">
          <span className="line-clamp-1">{post.title}</span>
          <span className="ml-auto mt-0.5 shrink-0 text-sm text-muted-foreground">
            {relativeTimestamp}
          </span>
        </HStack>
      </VStack>
    </ListItem>
  );
}
