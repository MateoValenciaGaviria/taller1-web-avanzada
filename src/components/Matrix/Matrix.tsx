import React from 'react';
import './Matrix.css';

interface MatrixProps{
    rows: number
    columns: number
    onMatrixClick: (index: number) => void;
}

export const Matrix: React.FC<MatrixProps> = ( { rows, columns, onMatrixClick } ) => {

    var buttons = [];
    
    for (let i = 0; i < ( rows * columns); i++) {
        var newButton = i;
        buttons.push(newButton);
    }
     
    return(
        <div className='matrixButtonsContainer' style={{gridTemplateColumns: `repeat(${columns}, 25px)`, gridTemplateRows: `repeat(${rows}, 25px)`}}>
            {buttons.map(function(currentValue) {
                const handleClick = () => {
                    onMatrixClick(currentValue);
                } 
                return <button className='matrixButtons' onClick={handleClick} value={currentValue}></button>
            })}
        </div>
    );
} 