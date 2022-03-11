import React from 'react';


type CellProps = {
    classes: {
        cell: string;
    },
    value: string;
}
export const Cell: React.FC<CellProps> = (props: CellProps) => {
    const { value, classes } = props;
    return (
        <div className={classes.cell}>
            {value}
        </div>
    )
}
