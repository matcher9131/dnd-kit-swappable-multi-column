import { useRecoilValue } from "recoil";
import Column from "./Column";
import Item from "../item/Item";
import { columnChildrenSelector } from "../../models/containerChildren";
import { getItemBgColor } from "../../util";

type DragOverlayColumnProps = {
    readonly header: string;
};

const DragOverlayColumn = ({ header }: DragOverlayColumnProps): JSX.Element => {
    const items = useRecoilValue(columnChildrenSelector(header));
    return (
        <Column header={header}>
            {items.map((item) => (
                <Item labelText={item} className={getItemBgColor(item)} />
            ))}
        </Column>
    );
};

export default DragOverlayColumn;
