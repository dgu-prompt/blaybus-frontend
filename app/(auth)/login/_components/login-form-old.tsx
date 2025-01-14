"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GalleryVerticalEnd } from "lucide-react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export function LoginForm({
  onSubmit,
}: {
  onSubmit: (formData: FormData) => Promise<{ token: string }>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    console.log("Logging in with form data:", formData);

    try {
      const result = await onSubmit(formData);
      console.log("Login successful! Token:", result.token);
      redirect("/home");
    } catch (err) {
      setError(err.message || "Something went wrong");
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={cn("flex flex-col gap-8")} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2">
        <a href="#" className="flex flex-col items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-6" />
          </div>
          <span className="sr-only">Acme Inc.</span>
        </a>
        <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
        <p className="text-center text-sm text-muted-foreground">
          Enter your user ID below to login to your account
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username">아이디</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
