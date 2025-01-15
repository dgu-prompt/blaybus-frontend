export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { getUsers } from "./_actions/get-users";
import { NewButton } from "./_components/new-button";

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
  const users = await getUsers();

  return (
    <>
      <NavigationBar title="회원 관리" actionButton={<NewButton />} />
      <List>
        <Section>
          {users.map((user: User) => (
            <ListItem
              key={user.employeeNumber}
              title={user.employeeName}
              detail={user.employeeNumber}
              href={`/admin/accounts/${user.employeeNumber}`}
            />
          ))}
        </Section>
      </List>
    </>
  );
}
