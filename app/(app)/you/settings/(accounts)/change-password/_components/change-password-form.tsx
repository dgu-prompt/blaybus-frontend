"use client";

import { z } from "zod";
import { List, ListButton, ListItem, Section } from "@/components/grouped-list";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { redirect } from "next/navigation";
import { changePassword } from "../_actions/change-password";

// User 타입 정의
interface User {
  employeeNumber: string;
  employeeName: string;
  department: string;
  joinDate: string;
  level: string;
  password: string; // 현재 비밀번호 저장
  jobGroupId: 1;
}

// 폼 스키마 정의
const formSchema = z
  .object({
    prevPassword: z.string().min(1, "현재 비밀번호를 입력해주세요."),
    password: z
      .string()
      .min(4, "새 비밀번호는 최소 4자리 이상이어야 합니다.")
      .max(64, "비밀번호는 64자를 초과할 수 없습니다."),
    passwordAgain: z.string().min(1, "새 비밀번호 확인을 입력해주세요."),
  })
  .refine((data) => data.password === data.passwordAgain, {
    message: "새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.",
    path: ["passwordAgain"],
  });

type FormSchema = z.infer<typeof formSchema>;

export function ChangePasswordForm({ user }: { user: User }) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prevPassword: "",
      password: "",
      passwordAgain: "",
    },
  });

  const handleFormSubmit = async (values: FormSchema) => {
    try {
      // 1. 현재 비밀번호 검증
      if (values.prevPassword !== user.password) {
        toast.error("현재 비밀번호가 올바르지 않습니다.");
        return;
      }

      // 2. changePassword로 새 비밀번호만 전송
      await changePassword({ password: values.password });
      toast.success("비밀번호가 변경되었습니다.");

      // 페이지 리디렉션
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error updating password: ${error.message}`);
        toast.error(`Error updating password: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error");
      }
    } finally {
      redirect("/you/settings");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full">
        <List>
          <Section>
            <ListItem title="아이디" detail={user.employeeNumber} />
            <ListItem
              title="현재 비밀번호"
              detail={
                <FormField
                  control={form.control}
                  name="prevPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="현재 비밀번호"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem
              title="새 비밀번호"
              detail={
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="새 비밀번호"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem
              title="새 비밀번호 확인"
              detail={
                <FormField
                  control={form.control}
                  name="passwordAgain"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="새 비밀번호 확인"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }
            />
          </Section>
          <Section>
            <ListButton
              title="비밀번호 변경"
              onClick={form.handleSubmit(handleFormSubmit)}
            />
          </Section>
        </List>
      </form>
    </Form>
  );
}
