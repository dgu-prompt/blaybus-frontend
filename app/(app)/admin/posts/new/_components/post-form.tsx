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
import { newPost } from "../_actions/new-post";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  postTitle: z.string(),
  content: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function PostForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postTitle: "",
      content: "",
    },
  });

  const handleFormSubmit = async (values: FormSchema) => {
    try {
      await newPost(values);
      toast.success("게시글 등록 성공!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error posting: ${error.message}`);
        toast.error(`Error posting: ${error.message}`);
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
            <ListItem title="제목">
              <FormField
                control={form.control}
                name="postTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ListInput
                        placeholder="제목"
                        {...field}
                        className="text-start"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </ListItem>
            <ListItem title="내용">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="내용"
                        {...field}
                        className="rounded-none border-none p-0 text-foreground shadow-none focus-visible:ring-0 active:border-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </ListItem>
            {/* <ListItem title="총 경험치" detail={`${userData.totalExp} do`} /> */}
          </Section>
          <Section>
            <ListButton
              title="게시글 등록"
              onClick={form.handleSubmit(handleFormSubmit)}
            ></ListButton>
          </Section>
        </List>
      </form>
    </Form>
  );
}
