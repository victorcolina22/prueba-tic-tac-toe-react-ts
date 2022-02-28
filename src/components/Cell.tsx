import React from 'react';


export const Cell: React.FC<any> = ({ cell, classes }) => {
    return (
        <div className={classes.cell}>
            {cell}
        </div>
    )
}
