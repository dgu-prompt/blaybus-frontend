"use client";

import { z } from "zod";
import { List, ListButton, ListItem, Section } from "@/components/grouped-list";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { setUser } from "../_actions/set-user";

interface User {
  employeeNumber: string;
  employeeName: string;
  department: string;
  joinDate: string;
  level: string;
  password: string;
  jobGroupId: 1;
}

const formSchema = z.object({
  department: z.string(),
  level: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function UserForm({ user }: { user: User }) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      department: user.department,
      level: user.level,
    },
  });

  const handleFormSubmit = async (values: FormSchema) => {
    try {
      await setUser(user.employeeNumber, values);
      toast.success("유저 업데이트 성공!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error updating user: ${error.message}`);
        toast.error(`Error updating user: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full">
        <List>
          <Section>
            <ListItem title="이름" detail={user.employeeName} />
            <ListItem title="사번" detail={user.employeeNumber} />
            <ListItem title="입사일" detail={user.joinDate} />
            <ListItem title="직무그룹" detail={user.jobGroupId} />
          </Section>
          <Section>
            <ListItem
              title="소속"
              detail={
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="소속" {...field}></Input>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem
              title="레벨"
              detail={
                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="레벨" {...field}></Input>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            {/* <ListItem title="총 경험치" detail={`${userData.totalExp} do`} /> */}
          </Section>
          <Section>
            <ListButton
              title="수정하기"
              onClick={form.handleSubmit(handleFormSubmit)}
            ></ListButton>
          </Section>
        </List>
      </form>
    </Form>
  );
}
