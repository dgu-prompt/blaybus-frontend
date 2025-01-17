"use client";

import { useState } from "react";
import { List, ListButton, Section } from "@/components/grouped-list";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { changeAvatar } from "../_actions/change-avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

// User 타입 정의
interface User {
  characterUrl: string;
}

// 선택 가능한 아바타 목록
const availableAvatars = [
  "/man-01.svg",
  "/man-02.svg",
  "/man-03.svg",
  "/man-05.svg",
  "/woman-01.svg",
  "/woman-03.svg",
  "/woman-04.svg",
  "/woman-05.svg",
];

export function ChangeAvatarForm({ user }: { user: User }) {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    user.characterUrl,
  );

  const handleFormSubmit = async () => {
    try {
      if (!availableAvatars.includes(selectedAvatar)) {
        toast.error("선택한 아바타는 사용할 수 없습니다.");
        return;
      }

      // API로 선택한 아바타 전송
      await changeAvatar({ character: selectedAvatar });
      toast.success("아바타가 변경되었습니다.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error updating avatar: ${error.message}`);
        toast.error(`Error updating avatar: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error");
      }
    } finally {
      redirect("/you");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      <List>
        <Section>
          <div className="custom-400:grid-cols-3 custom-600:grid-cols-4 grid grid-cols-2 gap-2 p-4 lg:grid-cols-5 xl:grid-cols-6">
            {availableAvatars.map((avatar) => (
              <label
                key={avatar}
                className={`flex cursor-pointer items-center justify-center`}
              >
                <Avatar
                  className={`size-24 border ${selectedAvatar === avatar && "border-blue-500 bg-blue-100"}`}
                >
                  <AvatarImage src={avatar} />
                </Avatar>
                <input
                  type="radio"
                  name="avatar"
                  value={avatar}
                  checked={selectedAvatar === avatar}
                  onChange={() => setSelectedAvatar(avatar)}
                  className="hidden"
                />
              </label>
            ))}
          </div>
        </Section>
        <Section>
          <ListButton title="아바타 변경하기" onClick={handleFormSubmit} />
        </Section>
      </List>
    </form>
  );
}
