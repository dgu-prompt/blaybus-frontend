import { NavigationBar } from "@/components/navigation-bar";
import { PostForm } from "./_components/post-form";

export default async function Page() {
  return (
    <>
      <NavigationBar title="새 게시글" />
      <PostForm />
    </>
  );
}
