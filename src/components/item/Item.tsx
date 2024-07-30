const getBgColor = (labelText: string): string => {
    return labelText.startsWith("A") ? "bg-red-300" : labelText.startsWith("B") ? "bg-green-300" : "bg-blue-300";
};

type ItemProps = {
    readonly labelText: string;
};

const Item = ({ labelText }: ItemProps): JSX.Element => {
    return <div className={`w-full flex items-center p-2 ${getBgColor(labelText)}`}>{labelText}</div>;
};

export default Item;
