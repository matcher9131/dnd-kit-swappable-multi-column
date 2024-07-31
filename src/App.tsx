import { useRecoilValue } from "recoil";
import Container from "./components/container/Container";
import { containerChildrenState } from "./models/containerChildren";
import { DndContext } from "@dnd-kit/core";
import { rectSwappingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableColumn from "./components/column/SortableColumn";

const App = (): JSX.Element => {
    const columns = useRecoilValue(containerChildrenState);

    return (
        <div className="w-full p-5">
            <DndContext>
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
