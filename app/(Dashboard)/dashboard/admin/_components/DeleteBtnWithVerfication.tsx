"use client";

import { NativeDelete } from "@/components/uitripled/native-delete-shadcnui";
import { useState } from "react";
type Props = {
  deleteFn: () => void;
};
export default function DeleteBtnWithVerfication({ deleteFn }: Props) {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center flex-1">
      {!deleted ? (
        <NativeDelete
          className="w-full!"
          onConfirm={() => {}}
          onDelete={() => {
            setDeleted(true);
            setTimeout(() => setDeleted(false), 2000);
            deleteFn();
          }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">Deleted!</div>
      )}
    </div>
  );
}
