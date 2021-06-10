import React from 'react';
import './MatrixButton.css';
import { TerrainType } from '../../utils/TerrainType';

interface MatrixButtonProps{
    index: number
    globalBossIndex: number,
    globalPotionIndex: number,
    globalShieldIndex: number,
    globalSwordIndex: number,
    currentValue: number,
    terrains: TerrainType[],
    onClick: () => void;
}

export const MatrixButton: React.FC<MatrixButtonProps> = ( { index, globalBossIndex, globalPotionIndex, globalShieldIndex, globalSwordIndex, currentValue, terrains, onClick} ) => {

    const [ activeLink, setactiveLink ] = React.useState(false);

    const handleBtnClick = () => {
        setactiveLink(!activeLink);
        onClick();
    }
    //{`${((globalBossIndex != -1 && globalBossIndex == index) || (globalPotionIndex !=-1 && globalPotionIndex == index) || (globalShieldIndex !=-1 && globalShieldIndex == index) || (globalSwordIndex != -1 && globalSwordIndex == index)) ? 'matrixButtons__Selected' : 'matrixButtons'}`}
    return(
        <button className={`${(activeLink) && (terrains[currentValue].visibility && ((globalBossIndex != -1 && globalBossIndex == index) || (globalPotionIndex !=-1 && globalPotionIndex == index) || (globalShieldIndex !=-1 && globalShieldIndex == index) || (globalSwordIndex != -1 && globalSwordIndex == index))) ? 'matrixButtons__Selected' : 'matrixButtons'}`} onClick={handleBtnClick} value={currentValue}></button>
    );
} 