import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { getUser } from "./_actions/get-user";
import { UserForm } from "./_components/user-form";

interface User {
  employeeNumber: string;
  employeeName: string;
  department: string;
  joinDate: string;
  level: string;
  password: string;
  jobGroupId: 1;
}

export default async function Page({ params }) {
  const user = await getUser(params.id);
  console.log(user);

  return (
    <>
      <NavigationBar title={user.employeeName} />
      <UserForm user={user} />
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
