import { getPost } from "./_actions/get-post";
import ClientComponent from "./_components/client-component";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPost(id);
  console.log(post);

  return <ClientComponent post={post} />;
}
