import React from 'react';
import { Matrix } from '../Matrix/Matrix';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import './Boss.css';

interface BossProps{
    bossType: string;
    bossColor: number;
    index: number;
    rows: number,
    columns: number,
    onBossVisibilityChange: (index: number, type: string) => void;
}

export const Boss: React.FC<BossProps> = ( { rows, columns, bossType, bossColor, index, onBossVisibilityChange} ) => {

    const imageSrc = getImageSrcFromType(`${bossType}${bossColor}`);

    return(
    <div className='mainBossContainer'> 
        <div className = 'bossSettingsContainer'>
            <button className = 'arrowBtn'>-</button>
                <div className = 'bossTerrainContainer'>
                    <div className = 'bossImgContainer'>

                    </div>
                </div>
            <button className = 'arrowBtn'>+</button>
        </div>
        <div></div>
        <Matrix
        rows = {rows}
        columns = {columns}
        onMatrixClick = {onBossVisibilityChange}
        type = 'boss'
        ></Matrix>
    </div>);
} 
