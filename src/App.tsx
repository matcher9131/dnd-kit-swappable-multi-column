import { useRecoilValue } from "recoil";
import Column from "./components/column/Column";
import Container from "./components/container/Container";
import Item from "./components/item/Item";
import { containerChildrenState } from "./models/containerChildren";

const getItemBgColor = (labelText: string): string => {
    return labelText.startsWith("A") ? "bg-red-300" : labelText.startsWith("B") ? "bg-green-300" : "bg-blue-300";
};

const App = (): JSX.Element => {
    const columns = useRecoilValue(containerChildrenState);

    return (
        <div className="w-full p-5">
            <Container>
                {columns.map((column) => (
                    <Column key={column.header} header={column.header}>
                        {column.items.map((item) => (
                            <Item key={item} labelText={item} className={getItemBgColor(item)} />
                        ))}
                    </Column>
                ))}
            </Container>
        </div>
    );
};

export default App;
