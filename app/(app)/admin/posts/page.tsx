export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { NewButton } from "./_components/new-button";
import { getPosts } from "./_actions/get-posts";

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
            return (
              <ListItem
                key={post.postId}
                title={<span className="line-clamp-1">{post.title}</span>}
                href={`/admin/posts/${post.postId}`}
              />
            );
          })}
        </Section>
      </List>
    </>
  );
}
