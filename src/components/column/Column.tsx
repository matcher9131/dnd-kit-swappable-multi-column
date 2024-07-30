import { type ReactNode } from "react";

type ColumnProps = {
    readonly children: ReactNode;
    readonly header: string;
};

const Column = ({ children, header: labelText }: ColumnProps): JSX.Element => {
    return (
        <div className="grow flex flex-col gap-y-3 p-3 bg-slate-200">
            <div>{labelText}</div>
            <div className="grow flex flex-col gap-y-3 ">{children}</div>
        </div>
    );
};

export default Column;
