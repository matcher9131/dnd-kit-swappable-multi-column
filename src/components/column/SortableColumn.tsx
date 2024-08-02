import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import { clsx } from "clsx";
import { useRecoilValue } from "recoil";
import Column from "./Column";
import SortableHolder from "../sortableHolder";
import SortableItem from "../item/SortableItem";
import { columnChildrenSelector } from "../../models/containerChildren";
import { activeIdState } from "../../models/dragTargets";

type SortableColumnProps = {
    readonly header: string;
};

const SortableColumn = ({ header }: SortableColumnProps): JSX.Element => {
    const items = useRecoilValue(columnChildrenSelector(header));
    const isDragActive = useRecoilValue(activeIdState) === header;
    return (
        <SortableHolder id={header} className={clsx("flex-1", isDragActive && "opacity-0")}>
            <Column header={header}>
                <SortableContext items={items} strategy={rectSwappingStrategy}>
                    {items.map((labelText) => (
                        <SortableItem key={labelText} labelText={labelText} />
                    ))}
                </SortableContext>
            </Column>
        </SortableHolder>
    );
};

export default SortableColumn;
