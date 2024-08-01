import { useRecoilCallback } from "recoil";
import { containerChildrenState } from "./containerChildren";

// 配列arrのindex1番目とindex2番目を入れ替えた配列を新たに返します。
const toSwapped = <T>(arr: readonly T[], index1: number, index2: number): T[] => {
    const newArray = [...arr];
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    return newArray;
};

export const useContainerChildren = () => {
    const swap = useRecoilCallback(({ set, snapshot }) => (id1: string, id2: string) => {
        const columns = snapshot.getLoadable(containerChildrenState).getValue();

        const headerIndex1 = columns.findIndex((column) => column.header === id1);
        const headerIndex2 = columns.findIndex((column) => column.header === id2);
        if (headerIndex1 >= 0 && headerIndex2 >= 0) {
            // Columnどうしの入れ替え
            set(containerChildrenState, (prev) => toSwapped(prev, headerIndex1, headerIndex2));
        } else {
            // Itemどうしの入れ替え
            const parentColumn1 = columns.find((column) => column.items.includes(id1));
            const parentColumn2 = columns.find((column) => column.items.includes(id2));
            if (parentColumn1 == null || parentColumn2 == null) return;

            if (parentColumn1 === parentColumn2) {
                // 同Column内
                set(containerChildrenState, (prev) =>
                    prev.map((column) =>
                        column === parentColumn1
                            ? {
                                  header: column.header,
                                  items: toSwapped(column.items, column.items.indexOf(id1), column.items.indexOf(id2)),
                              }
                            : column,
                    ),
                );
            } else {
                // 異Column間
                set(containerChildrenState, (prev) =>
                    prev.map((column) =>
                        column === parentColumn1
                            ? { header: column.header, items: column.items.map((item) => (item === id1 ? id2 : item)) }
                            : column === parentColumn2
                              ? {
                                    header: column.header,
                                    items: column.items.map((item) => (item === id2 ? id1 : item)),
                                }
                              : column,
                    ),
                );
            }
        }
    });

    return { swap };
};
