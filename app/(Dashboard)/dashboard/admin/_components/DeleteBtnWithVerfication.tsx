"use client";

import { Spinner } from "@/components/ui/spinner";
import { NativeDelete } from "@/components/uitripled/native-delete-shadcnui";
import { useState } from "react";
type Props = {
  deleteFn: () => void;
  isPending: boolean;
};
export default function DeleteBtnWithVerfication({
  deleteFn,
  isPending,
}: Props) {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center flex-1">
      {isPending ? (
        <Spinner />
      ) : !deleted ? (
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
