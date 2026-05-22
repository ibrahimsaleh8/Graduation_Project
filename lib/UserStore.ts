import { create } from "zustand";

type User = {
  userId: string;
  email: string;
  role: string;
};

type UserStore = {
  userData: User | null;

  setUserData: (user: User) => void;

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
