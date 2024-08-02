import { atom } from "recoil";

export const activeIdState = atom<string | null>({ key: "activeIdState", default: null });
