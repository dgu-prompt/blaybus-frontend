import { ListItem } from "@/components/list";
import { HStack, VStack } from "@/components/grouped-list";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export function PostListItem({
  post,
}: {
  post: {
    id: string;
    title: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
  };
}) {
  const updatedAtRelative = post.updatedAt
    ? formatDistanceToNow(new Date(post.updatedAt), {
        addSuffix: true,
        locale: ko,
      })
    : null;

  return (
    <ListItem key={post.id} containerClassName="active:bg-accent">
      <VStack>
        <HStack>
          <span>{post.title}</span>
          <span className="ml-auto text-sm text-muted-foreground">
            {updatedAtRelative}
          </span>
        </HStack>
        {post.content && (
          <span className="text-sm text-muted-foreground">{post.content}</span>
        )}
      </VStack>
    </ListItem>
  );
}
