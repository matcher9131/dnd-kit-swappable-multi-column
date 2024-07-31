type ItemProps = {
    readonly labelText: string;
    readonly className?: string;
};

const Item = ({ labelText, className }: ItemProps): JSX.Element => {
    return <div className={`w-full flex items-center p-2 ${className}`}>{labelText}</div>;
};

export default Item;
