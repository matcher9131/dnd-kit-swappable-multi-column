import { clsx } from "clsx";
import { useRecoilValue } from "recoil";
import Item from "./Item";
import SortableHolder from "../SortableHolder";
import { activeIdState, activeParentIdSelector, overIdState, overParentIdSelector } from "../../models/dragTargets";
import { getItemBgColor } from "../../util";

type SortableItemProps = {
    readonly labelText: string;
};

const SortableItem = ({ labelText }: SortableItemProps): JSX.Element => {
    const isDragActive = useRecoilValue(activeIdState) === labelText;
    const isDragOver = useRecoilValue(overIdState) === labelText;
    const isDraggingBetweenColumns = useRecoilValue(activeParentIdSelector) !== useRecoilValue(overParentIdSelector);
    return (
        <SortableHolder
            id={labelText}
            className={clsx(isDragActive && "opacity-0", isDragOver && isDraggingBetweenColumns && "opacity-50")}
        >
            <Item labelText={labelText} className={getItemBgColor(labelText)} />
        </SortableHolder>
    );
};

export default SortableItem;
