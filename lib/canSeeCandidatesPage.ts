import { create } from "zustand";

type CandidatePageStore = {
  canSeeCandidatesPage: boolean;
  setCanSeeCandidatesPage: (value: boolean) => void;
};

export const useCandidatePageStore = create<CandidatePageStore>((set) => ({
  canSeeCandidatesPage: false,

  setCanSeeCandidatesPage: (value) => set({ canSeeCandidatesPage: value }),
}));
