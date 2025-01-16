import { NavigationBar } from "@/components/navigation-bar";
import { NewUserForm } from "./_components/new-user-form";

export default async function Page() {
  return (
    <>
      <NavigationBar title="새 구성원" />
      <NewUserForm />
    </>
  );
}
