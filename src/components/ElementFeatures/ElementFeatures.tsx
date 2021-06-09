import React from 'react';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { Matrix } from '../Matrix/Matrix';
import './ElementFeatures.css';

interface ElementFeaturesProps{
    rows: number,
    columns: number,
    onElementVisibilityChange: (index: number, type: string) => void;
    type: string,
}

export const ElementFeatures: React.FC<ElementFeaturesProps> = ( { rows, columns, onElementVisibilityChange, type } ) => {

    return(
        <div className = 'elementFeaturesMainContainer'>
            <div>
                <p className = 'elementMatrixText'>Seleccionar en el mapa la posición del elemento</p>
                <Matrix 
                rows = {rows}
                columns = {columns}
                onMatrixClick = {onElementVisibilityChange}
                type = {type}
                ></Matrix>
            </div>
        </div>
    );
} 