export const dynamic = "force-dynamic"; // 동적 렌더링 강제

import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { getUsers } from "./_actions/get-users";

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
  console.log(users);

  return (
    <>
      <NavigationBar title="회원 관리" />
      <div className="w-full max-w-screen-sm">
        <List>
          <Section footer="관리할 회원을 선택해주세요">
            {users.map((user: User) => (
              <ListItem
                key={user.employeeNumber}
                title={user.employeeName}
                detail={user.employeeNumber}
                href={`/admin/accounts/${user.employeeNumber}`}
              />
            ))}
            {/* {accountData.map((account) => (
              <Row key={account.id}>
                <ListNav
                  href={`/settings/admin-accounts/${account.id}`}
                  label={account.name}
                />
              </Row>
            ))} */}
          </Section>
        </List>
      </div>
    </>
  );
}
