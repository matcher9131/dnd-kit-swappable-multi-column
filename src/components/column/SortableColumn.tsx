import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import { useRecoilValue } from "recoil";
import Column from "./Column";
import SortableHolder from "../sortableHolder";
import SortableItem from "../item/SortableItem";
import { columnChildrenSelector } from "../../models/containerChildren";

type SortableColumnProps = {
    readonly header: string;
};

const SortableColumn = ({ header }: SortableColumnProps): JSX.Element => {
    const items = useRecoilValue(columnChildrenSelector(header));
    return (
        <SortableHolder id={header} className="flex-1">
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
