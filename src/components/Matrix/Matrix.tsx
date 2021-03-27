import React from 'react';
import './Matrix.css';

interface MatrixProps{
    rows: number
    columns: number
}

export const Matrix: React.FC<MatrixProps> = ( { rows, columns } ) => {

    var positions = [];
    
    for (let i = 0; i < rows; i++) {
        positions[i] = new Array(columns);
    }
     
    return(
        <div>
            {}
        </div>
    );
} 