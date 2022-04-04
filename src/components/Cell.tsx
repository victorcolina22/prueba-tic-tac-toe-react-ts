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

export const Cell: React.FC<CellProps> = ({ value, classes, idx, handleCellvalue }: CellProps) => {
    return (
        <div
            className={classes.cell}
            onClick={() => handleCellvalue(idx)}>
            <p className={classes.player}>
                {value}
            </p>
        </div>
    )
};