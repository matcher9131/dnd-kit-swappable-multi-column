import { useRecoilValue } from "recoil";
import Column from "./components/column/Column";
import Container from "./components/container/Container";
import Item from "./components/item/Item";
import { containerChildrenState } from "./models/containerChildren";

const App = (): JSX.Element => {
    const columns = useRecoilValue(containerChildrenState);

    return (
        <div className="w-full p-5">
            <Container>
                {columns.map((column) => (
                    <Column key={column.header} header={column.header}>
                        {column.items.map((item) => (
                            <Item key={item} labelText={item} />
                        ))}
                    </Column>
                ))}
            </Container>
        </div>
    );
};

export default App;
