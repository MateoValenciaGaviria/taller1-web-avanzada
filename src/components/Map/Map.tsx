import React from 'react'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { MatrixContainer } from '../../containers/MatrixContainer/MatrixContainer';
import './Map.css';

interface MapProps {
    mapType: string,
    rows: number,
    columns: number,
}

export const Map: React.FC<MapProps> = ( { mapType, rows, columns } ) => {

    const imageSrc = getImageSrcFromType(`${mapType}`);

    return(
        <div className='mainMapContainer'>
            <div></div>
            <MatrixContainer></MatrixContainer>
            <div></div>
        </div>
    );
}