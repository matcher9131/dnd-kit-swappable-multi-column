import { atom, selector } from "recoil";
import { containerChildrenState } from "./containerChildren";

export const activeIdState = atom<string | null>({ key: "activeIdState", default: null });

export const overIdState = atom<string | null>({ key: "overIdState", default: null });

export const activeParentIdSelector = selector<string | null>({
    key: "activeParentIdSelector",
    get: ({ get }) => {
        const activeId = get(activeIdState);
        return get(containerChildrenState)?.find((column) => column.items.includes(activeId ?? ""))?.header ?? null;
    },
});

export const overParentIdSelector = selector<string | null>({
    key: "overParentIdSelector",
    get: ({ get }) => {
        const overId = get(overIdState);
        return get(containerChildrenState)?.find((column) => column.items.includes(overId ?? ""))?.header ?? null;
    },
});
