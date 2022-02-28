import React from 'react';

interface CellContent {
    classes: {
        cell: string
    },
    letter: null
}

export const Cell: React.FC<CellContent> = ({ letter, classes }) => {
    return (
        <div className={classes.cell}>
            {letter}
        </div>
    )
}
