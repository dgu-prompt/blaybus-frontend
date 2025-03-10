"use client";

import { z } from "zod";
import {
  List,
  ListButton,
  ListInput,
  ListItem,
  Section,
} from "@/components/grouped-list";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { newUser } from "../_actions/new-user";
import { redirect } from "next/navigation";

const formSchema = z.object({
  employeeNumber: z.string(),
  employeeName: z.string(),
  username: z.string(),
  department: z.string(), // 음성 1센터	음성 2센터	용인백암센터	남양주센터	파주센터	사업기획팀	그로스팀	CX팀
  joinDate: z.string(),
  level: z.string(),
  password: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function NewUserForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeNumber: "",
      employeeName: "",
      username: "",
      department: "", // 음성 1센터	음성 2센터	용인백암센터	남양주센터	파주센터	사업기획팀	그로스팀	CX팀
      joinDate: "",
      level: "",
      password: "",
    },
  });

  const handleFormSubmit = async (values: FormSchema) => {
    try {
      await newUser(values);
      toast.success("게시글 등록 성공!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error posting: ${error.message}`);
        toast.error(`Error posting: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error");
      }
    } finally {
      redirect("/admin/accounts");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full">
        <List>
          <Section>
            <ListItem
              title="사번"
              detail={
                <FormField
                  control={form.control}
                  name="employeeNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ListInput placeholder="사번" {...field}></ListInput>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem
              title="이름"
              detail={
                <FormField
                  control={form.control}
                  name="employeeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ListInput placeholder="이름" {...field}></ListInput>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem
              title="아이디"
              detail={
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ListInput placeholder="아이디" {...field}></ListInput>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem
              title="부서"
              detail={
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ListInput placeholder="부서" {...field}></ListInput>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            {/* 이거 혹시 날짜 피커로 해야하나... */}
            <ListItem
              title="입사일"
              detail={
                <FormField
                  control={form.control}
                  name="joinDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ListInput
                          placeholder="yyyy-MM-dd"
                          {...field}
                        ></ListInput>
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
                        <ListInput placeholder="레벨" {...field}></ListInput>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem
              title="비밀번호"
              detail={
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ListInput
                          placeholder="비밀번호"
                          {...field}
                        ></ListInput>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
          </Section>
          <Section>
            <ListButton
              title="구성원 등록"
              onClick={form.handleSubmit(handleFormSubmit)}
            ></ListButton>
          </Section>
        </List>
      </form>
    </Form>
  );
}
