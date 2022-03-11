import React from 'react';


type CellProps = {
    classes: {
        cell: string;
        player: string;
    },
    value: string;
    idx: number;
    handleCellvalue(param: number): any;
}
export const Cell: React.FC<CellProps> = (props: CellProps) => {
    const { value, classes, idx, handleCellvalue } = props;
    return (
        <div
            className={classes.cell}
            onClick={() => handleCellvalue(idx)}>
            <p className={classes.player}>
                {value}
            </p>
        </div>
    )
}
