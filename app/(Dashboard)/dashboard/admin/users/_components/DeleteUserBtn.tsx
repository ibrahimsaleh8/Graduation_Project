"use client";

import { NativeDelete } from "@/components/uitripled/native-delete-shadcnui";
import { useState } from "react";

export default function DeleteUserBtn() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="flex items-center justify-center flex-1">
      {!deleted ? (
        <NativeDelete
          className="w-full!"
          onConfirm={() => {
            // Handle confirmation UI shown
          }}
          onDelete={() => {
            setDeleted(true);
            setTimeout(() => setDeleted(false), 2000);
          }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">Deleted!</div>
      )}
    </div>
  );
}
