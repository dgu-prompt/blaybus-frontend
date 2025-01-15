import { ListItem } from "@/components/list";
import { VStack } from "@/components/grouped-list";

export function PostListItem({
  post,
}: {
  post: {
    id: string;
    postTitle: string;
    content: string;
  };
}) {
  return (
    <ListItem key={post.id} containerClassName="active:bg-accent">
      <VStack>
        <span>{post.postTitle}</span>
        <span className="text-sm text-muted-foreground">{post.content}</span>
      </VStack>
    </ListItem>
  );
}
