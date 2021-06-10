import React from 'react';
import { MatrixButton } from '../MatrixButton/MatrixButton';
import { TerrainType } from '../../utils/TerrainType';
import './Matrix.css';

interface MatrixProps{
    rows: number,
    columns: number,
    onMatrixClick: (index: number, type: string) => void;
    type: string,
    globalBossIndex: number,
    globalPotionIndex: number,
    globalShieldIndex: number,
    globalSwordIndex: number,
    terrains: TerrainType[]
}

export const Matrix: React.FC<MatrixProps> = ( { rows, columns, onMatrixClick, type, globalBossIndex, globalPotionIndex, globalShieldIndex, globalSwordIndex, terrains} ) => {

    var buttons = [];
    
    for (let i = 0; i < ( rows * columns); i++) {
        var newButton = i;
        buttons.push(newButton);
    }
     
    return(
        <div className='matrixButtonsContainer' style={{gridTemplateColumns: `repeat(${columns}, 25px)`, gridTemplateRows: `repeat(${rows}, 25px)`}}>
            {buttons.map(function(currentValue) {
                
                const handleClick = () => {
                    onMatrixClick(currentValue, type);
                } 
            return <MatrixButton
                index = {currentValue}
                onClick = {handleClick}
                currentValue = {currentValue}
                globalBossIndex = {globalBossIndex}
                globalPotionIndex = {globalPotionIndex}
                globalShieldIndex = {globalShieldIndex}
                globalSwordIndex = {globalSwordIndex}
                terrains = {terrains}
                ></MatrixButton>
            })}
        </div>
    );
} 