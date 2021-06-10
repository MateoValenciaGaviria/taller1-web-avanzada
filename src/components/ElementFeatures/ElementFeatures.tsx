import React from 'react';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { Matrix } from '../Matrix/Matrix';
import { TerrainType } from '../../utils/TerrainType';
import './ElementFeatures.css';

interface ElementFeaturesProps{
    rows: number,
    columns: number,
    onElementVisibilityChange: (index: number, type: string) => void;
    type: string,
    globalBossIndex: number,
    globalPotionIndex: number,
    globalShieldIndex: number,
    globalSwordIndex: number,
    terrains: TerrainType[],
}

export const ElementFeatures: React.FC<ElementFeaturesProps> = ( { rows, columns, globalBossIndex, globalPotionIndex, globalShieldIndex, globalSwordIndex, onElementVisibilityChange, type, terrains } ) => {

    return(
        <div className = 'elementFeaturesMainContainer'>
            <div>
                <p className = 'elementMatrixText'>Seleccionar en el mapa la posición del elemento</p>
                <Matrix 
                rows = {rows}
                columns = {columns}
                onMatrixClick = {onElementVisibilityChange}
                type = {type}
                globalBossIndex = {globalBossIndex}
                globalPotionIndex = {globalPotionIndex}
                globalShieldIndex = {globalShieldIndex}
                globalSwordIndex = {globalSwordIndex}
                terrains = {terrains}
                ></Matrix>
            </div>
        </div>
    );
} 