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
import { GalleryVerticalEnd } from "lucide-react";
import { VStack } from "@/components/grouped-list";
import Image from "next/image";
import appIcon from "@/app/apple-icon.png";

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
    } catch (error: any) {
      toast.error(error?.message || "로그인 실패");
    } finally {
      redirect("/home");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="mb-10 flex flex-col items-center gap-2">
          <a
            href="#"
            className="flex flex-col items-center gap-2 font-semibold"
          >
            <div className="mb-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border">
              {/* <GalleryVerticalEnd className="size-10" /> */}
              <Image src={appIcon} alt={"icon"} width={64} height={64} />
            </div>
            <span className="sr-only">Acme Inc.</span>
          </a>
          <h1 className="text-2xl font-bold">두더디</h1>
          <p className="text-center text-muted-foreground">
            성장하는 당신의 모습을 두더디와 함께 확인해요!
          </p>
        </div>
        <VStack className="gap-8">
          <VStack className="gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="아이디" {...field} />
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
                  <FormControl>
                    <Input type="password" placeholder="비밀번호" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </VStack>

          <Button type="submit" className="w-full">
            로그인
          </Button>
        </VStack>
      </form>
    </Form>
  );
}
