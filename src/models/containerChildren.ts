import { atom } from "recoil";

export const containerChildrenState = atom<ReadonlyArray<{ header: string; items: string[] }>>({
    key: "containerChildrenState",
    default: [
        { header: "A", items: ["A1", "A2", "A3", "A4"] },
        { header: "B", items: ["B1", "B2"] },
        { header: "C", items: ["C1", "C2", "C3"] },
    ],
});
