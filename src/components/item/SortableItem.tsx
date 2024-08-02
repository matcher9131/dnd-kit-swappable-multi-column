import { clsx } from "clsx";
import { useRecoilValue } from "recoil";
import Item from "./Item";
import SortableHolder from "../sortableHolder";
import { activeIdState } from "../../models/dragTargets";
import { getItemBgColor } from "../../util";

type SortableItemProps = {
    readonly labelText: string;
};

const SortableItem = ({ labelText }: SortableItemProps): JSX.Element => {
    const isDragActive = useRecoilValue(activeIdState) === labelText;
    return (
        <SortableHolder id={labelText} className={clsx(isDragActive && "opacity-0")}>
            <Item labelText={labelText} className={getItemBgColor(labelText)} />
        </SortableHolder>
    );
};

export default SortableItem;
