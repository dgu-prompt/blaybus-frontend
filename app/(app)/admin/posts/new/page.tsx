import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { getUser } from "./_actions/get-user";
import { PostForm } from "./_components/post-form";

interface User {
  employeeNumber: string;
  employeeName: string;
  department: string;
  joinDate: string;
  level: string;
  password: string;
  jobGroupId: 1;
}

export default async function Page() {
  return (
    <>
      <NavigationBar title="새 게시글" />
      <PostForm />
      {/* {users.map((user: User) => (
              <ListItem
                key={user.employeeNumber}
                title={user.employeeName}
                detail={user.employeeNumber}
                href={`/admin/accounts/${user.employeeNumber}`}
              />
            ))} */}
      {/* {accountData.map((account) => (
              <Row key={account.id}>
                <ListNav
                  href={`/settings/admin-accounts/${account.id}`}
                  label={account.name}
                />
              </Row>
            ))} */}
    </>
  );
}
