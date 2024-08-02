import { useRecoilState, useRecoilValue } from "recoil";
import Container from "./components/container/Container";
import { containerChildrenState } from "./models/containerChildren";
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableColumn from "./components/column/SortableColumn";
import { activeIdState, overIdState } from "./models/dragTargets";
import { useContainerChildren } from "./models/useContainerChildren";
import DragOverlayColumn from "./components/column/DragOverlayColumn";
import { getItemBgColor } from "./util";
import Item from "./components/item/Item";

const App = (): JSX.Element => {
    const columns = useRecoilValue(containerChildrenState);
    const { swap } = useContainerChildren();
    const [activeId, setActiveId] = useRecoilState(activeIdState);
    const [, setOverId] = useRecoilState(overIdState);

    const handleDragStart = (e: DragStartEvent) => {
        setActiveId(e.active.id.toString());
    };

    const handleDragOver = (e: DragOverEvent) => {
        setOverId(e.over?.id?.toString() ?? null);
    };

    const handleDragEnd = (e: DragEndEvent): void => {
        setActiveId(null);
        setOverId(null);

        const activeId = e.active.id.toString();
        const overId = e.over?.id?.toString();
        if (overId == null) return;

        // 特定の要素のみ入れ替えを禁止する場合はここで早期returnさせます。
        // 試しにA1とB1の入れ替えを禁止してみます。
        if ((activeId === "A1" && overId === "B1") || (activeId === "B1" && overId === "A1")) return;

        swap(activeId, overId);
    };

    return (
        <div className="w-full p-5">
            <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
                <Container>
                    <SortableContext items={columns.map((column) => column.header)} strategy={rectSwappingStrategy}>
                        {columns.map((column) => (
                            <SortableColumn key={column.header} header={column.header} />
                        ))}
                    </SortableContext>
                </Container>
                <DragOverlay>
                    {activeId != null &&
                        (columns.some((column) => column.header === activeId) ? (
                            <DragOverlayColumn header={activeId} />
                        ) : (
                            <Item labelText={activeId} className={getItemBgColor(activeId)} />
                        ))}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

export default App;
