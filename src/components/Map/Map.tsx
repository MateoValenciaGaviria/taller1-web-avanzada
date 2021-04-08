import React from 'react'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { Matrix } from '../Matrix/Matrix';
import './Map.css';

interface MapProps {
    mapType: string,
    rows: number,
    columns: number,
    onRowsDecrease: () => void;
    onRowsIncrease: () => void;
    onColumnDecrease: () => void;
    onColumnIncrease: () => void;
    onMatrixChange: () => void;
    onVisibilityChange: () => void;
}

export const Map: React.FC<MapProps> = ( { mapType, rows, columns,  onRowsDecrease, onRowsIncrease, onColumnDecrease, onColumnIncrease, onMatrixChange, onVisibilityChange } ) => {

    const imageSrc = getImageSrcFromType(`${mapType}`);

    return(
        <div className='mainMapContainer'>
            <div className='rowsColumnsNumberContainer'>
                <div className='numbersContainer'>
                    <div>Filas</div>
                    <div className='numbersControl'>
                        <button onClick={onRowsDecrease} className='arrowBtn'>-</button>
                        <input type="text" className='mapInput' value={rows} onChange={onMatrixChange}/>
                        <button onClick={onRowsIncrease} className='arrowBtn'>+</button>
                    </div>
                </div>
                <div className='numbersContainer'>
                    <div>Columnas</div>
                    <div className='numbersControl'>
                        <button onClick={onColumnDecrease} className='arrowBtn'>-</button>
                        <input type="text" className='mapInput'value={columns}/>
                        <button onClick={onColumnIncrease} className='arrowBtn'>+</button>
                    </div>
                </div>
            </div>
            <div>
                <p>Cambiar visibilidad del terreno</p>
                <Matrix 
                rows = {rows}
                columns = {columns}
                onVisibilityChange = {onVisibilityChange}
                ></Matrix>
            </div>
            <div className='terrainStylesContainer'>
                <button className='mapStyleBtn'>Estilo 1</button>
                <button className='mapStyleBtn'>Estilo 2</button>
                <button className='mapStyleBtn'>Estilo 3</button>
                <button className='mapStyleBtn'>Estilo 4</button>
            </div>
        </div>
    );
}