import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { NewButton } from "./_components/new-button";
import { getPosts } from "./_actions/get-posts";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface Post {
  postId: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <NavigationBar title="게시글 관리" actionButton={<NewButton />} />

      <List>
        <Section>
          {posts.posts.map((post: Post) => {
            const updatedAtRelative = post.updatedAt
              ? formatDistanceToNow(new Date(post.updatedAt), {
                  addSuffix: true,
                  locale: ko,
                })
              : null;

            return (
              <ListItem
                key={post.postId}
                title={post.title}
                detail={updatedAtRelative}
                href={`/admin/posts/${post.postId}`}
              />
            );
          })}
        </Section>
      </List>
    </>
  );
}
