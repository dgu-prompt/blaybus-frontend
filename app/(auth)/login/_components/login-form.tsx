"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const loginSchema = z.object({
  username: z.string().min(2, "아이디는 최소 2자 이상이어야 합니다."),
  password: z.string().min(4, "비밀번호는 최소 4자 이상이어야 합니다."),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm({
  onSubmit,
}: {
  onSubmit: (data: LoginSchema) => Promise<void>;
}) {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleFormSubmit = async (values: LoginSchema) => {
    try {
      await onSubmit(values);
      toast.success("로그인 성공!");
      redirect("/home");
    } catch (error: any) {
      toast.error(error?.message || "로그인 실패");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-6"
      >
        <div className="text-center">
          <h1 className="text-xl font-bold">로그인</h1>
          <p className="text-sm text-muted-foreground">
            아래 정보를 입력해 주세요.
          </p>
        </div>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>아이디</FormLabel>
              <FormControl>
                <Input placeholder="아이디를 입력하세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  );
}
