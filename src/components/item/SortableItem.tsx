import SortableHolder from "../sortableHolder";
import Item from "./Item";

const getBgColor = (labelText: string): string => {
    return labelText.startsWith("A") ? "bg-red-300" : labelText.startsWith("B") ? "bg-green-300" : "bg-blue-300";
};

type SortableItemProps = {
    readonly labelText: string;
};

const SortableItem = ({ labelText }: SortableItemProps): JSX.Element => {
    return (
        <SortableHolder id={labelText}>
            <Item labelText={labelText} className={getBgColor(labelText)} />
        </SortableHolder>
    );
};

export default SortableItem;
