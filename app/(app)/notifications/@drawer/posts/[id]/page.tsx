import { getPost } from "./_actions/get-post";
import ClientComponent from "./_components/client-component";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return <ClientComponent post={post} />;
}
