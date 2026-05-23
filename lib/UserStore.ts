import { create } from "zustand";

export type AuthUserDataType = {
  userId: string;
  email: string;
  role: string;
};

type UserStore = {
  userData: AuthUserDataType | null;

  setUserData: (user: AuthUserDataType) => void;

  clearUserData: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userData: null,

  setUserData: (user) =>
    set({
      userData: user,
    }),

  clearUserData: () =>
    set({
      userData: null,
    }),
}));
