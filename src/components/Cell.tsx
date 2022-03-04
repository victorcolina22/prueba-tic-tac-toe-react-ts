import React from 'react';

type CellProps = {
    classes: {
        cell: string
    },
    letter: null
}

export const Cell: React.FC<CellProps> = (props: CellProps) => {

    const { letter, classes } = props;

    return (
        <div className={classes.cell}>
            {letter}
        </div>
    )
}
