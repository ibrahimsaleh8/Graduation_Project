"use client";

import { useInitializeUserData } from "@/hooks/useInitializeUserData";

export default function InitilaizeAuthedUser() {
  useInitializeUserData();
  return null;
}
