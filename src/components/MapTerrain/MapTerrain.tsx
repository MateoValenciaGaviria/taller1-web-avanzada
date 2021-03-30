import React from 'react';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import './MapTerrain.css';

interface MapTerrainProps{
        index: number,
        type: number,
        visibility: boolean,
        potion: boolean,
        sword: boolean,
        shield: boolean,
        boss: boolean,
        bossType: number,
        player: boolean,
}

export const MapTerrain: React.FC<MapTerrainProps> = ({ index, type, visibility, potion, sword, shield, boss, bossType, player }) => {

    var type2 = false;

    if(index %2){
        type2 = true;
    }

    return(
    <div className={`${visibility && (type2 ? 'terrainStyle2' : 'terrainStyle1')}`}>
        <div className='elementContainer'>
               
        </div>
    </div>);

}