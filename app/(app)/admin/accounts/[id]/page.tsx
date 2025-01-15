import { NavigationBar } from "@/components/navigation-bar";
import { getUser } from "./_actions/get-user";
import { UserForm } from "./_components/user-form";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <>
      <NavigationBar title={user.employeeName} />
      <UserForm user={user} />
    </>
  );
}
