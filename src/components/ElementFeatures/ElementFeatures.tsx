import React from 'react';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { Matrix } from '../Matrix/Matrix';
import './ElementFeatures.css';

interface ElementFeaturesProps{
    rows: number,
    columns: number,
    onElementVisibilityChange: (index: number) => void;
}

export const ElementFeatures: React.FC<ElementFeaturesProps> = ( { rows, columns, onElementVisibilityChange } ) => {

    return(
        <div className = 'elementFeaturesMainContainer'>
            <div className = 'elementVisibilityContainer'>
                <input className = 'elementVisibilityInput' type = 'checkbox'></input>
                <p className = 'elementVisibilityText'>Estado</p>
            </div>
                <div>
                <p className = 'elementMatrixText'>Seleccionar en el mapa la posición del elemento</p>
                <Matrix 
                rows = {rows}
                columns = {columns}
                onMatrixClick = {onElementVisibilityChange}
                ></Matrix>
            </div>
        </div>
    );
} 