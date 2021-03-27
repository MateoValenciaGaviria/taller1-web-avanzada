import React from 'react'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { Matrix } from '../../containers/MatrixContainer/MatrixContainer';
import 'Map.css';

interface MapProps {
    mapType: string,
    rows: number,
    columns: number,
}

export const Map: React.FC<MapProps> = ( { mapType, rows, columns } ) => {

    const imageSrc = getImageSrcFromType(`${mapType}`);

    return(
        <div>
            <Matrix></Matrix>
        </div>
    );
}