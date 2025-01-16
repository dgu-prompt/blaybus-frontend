import { NavigationBar } from "@/components/navigation-bar";
import { getPost } from "./_actions/get-post";
import { PostForm } from "./_components/post-form";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <>
      <NavigationBar title={post.title} />
      <PostForm post={post} />
    </>
  );
}
