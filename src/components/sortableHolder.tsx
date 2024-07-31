import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { type CSSProperties, type ReactNode } from "react";

type SortableHolderProps = {
    readonly children: ReactNode;
    readonly id: string;
    readonly className?: string;
};

const SortableHolder = ({ children, id, className }: SortableHolderProps): JSX.Element => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={className}>
            {children}
        </div>
    );
};

export default SortableHolder;
