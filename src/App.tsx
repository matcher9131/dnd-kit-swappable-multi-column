import { useRecoilValue } from "recoil";
import Container from "./components/container/Container";
import { containerChildrenState } from "./models/containerChildren";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableColumn from "./components/column/SortableColumn";
import { useContainerChildren } from "./models/useContainerChildren";

const App = (): JSX.Element => {
    const columns = useRecoilValue(containerChildrenState);
    const { swap } = useContainerChildren();

    const handleDragEnd = (e: DragEndEvent): void => {
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
            <DndContext onDragEnd={handleDragEnd}>
                <Container>
                    <SortableContext items={columns.map((column) => column.header)} strategy={rectSwappingStrategy}>
                        {columns.map((column) => (
                            <SortableColumn key={column.header} header={column.header} />
                        ))}
                    </SortableContext>
                </Container>
            </DndContext>
        </div>
    );
};

export default App;
