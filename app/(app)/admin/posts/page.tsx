import { NavigationBar } from "@/components/navigation-bar";
import { List, ListItem, Section } from "@/components/grouped-list";
import { getPosts } from "./_actions/get-posts";
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
  // const users = await getPosts();
  // console.log(users);

  return (
    <>
      <NavigationBar title="게시글 관리" actionButton={<NewButton />} />

      <List>
        <ListItem title="API 구현 예정" />
        {/* <Section footer="관리할 회원을 선택해주세요">
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
        {/* </Section>  */}
      </List>
    </>
  );
}
