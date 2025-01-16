"use client";

import { z } from "zod";
import { List, ListButton, ListItem, Section } from "@/components/grouped-list";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { deletePost } from "../_actions/delete-post";
import { redirect } from "next/navigation";
import { setPost } from "../_actions/set-post";

interface Post {
  postId: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

const formSchema = z.object({
  postTitle: z.string(),
  content: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function PostForm({ post }: { post: Post }) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postTitle: post.title,
      content: post.content,
    },
  });

  const handleFormSubmit = async (values: FormSchema) => {
    try {
      await setPost(post.postId, values);
      toast.success("유저 업데이트 성공!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error updating user: ${error.message}`);
        toast.error(`Error updating user: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error");
      }
    } finally {
      redirect("/adwmin/posts");
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(post.postId); // 삭제 API 호출
      toast.success("포스트가 삭제되었습니다.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error deleting post: ${error.message}`);
        toast.error(`Error deleting post: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error");
      }
    } finally {
      redirect("/admin/posts"); // 삭제 후 목록 페이지로 이동
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full">
        <List>
          <Section>
            <ListItem
              title="제목"
              detail={
                <FormField
                  control={form.control}
                  name="postTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="제목" {...field}></Input>
                      </FormControl>
                    </FormItem>
                  )}
                />
              }
            />
            <ListItem title="내용">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="내용" {...field}></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />
            </ListItem>
          </Section>
          <Section>
            <ListButton
              title="수정하기"
              onClick={form.handleSubmit(handleFormSubmit)}
            />
          </Section>
        </List>
      </form>
      <Section>
        <ListButton
          title="삭제하기"
          onClick={handleDelete} // 삭제 버튼 동작
        />
      </Section>
    </Form>
  );
}
