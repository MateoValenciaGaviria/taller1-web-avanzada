import React from 'react';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import './MapTerrain.css';

interface MapTerrainProps{
    index: number,
    type: string,
    visibility: boolean,
    potion: boolean,
    sword: boolean,
    shield: boolean,
    boss: boolean,
    bossType: number,
    player: boolean,
}

export const MapTerrain: React.FC<MapTerrainProps> = ({ index, type, visibility, potion, sword, shield, boss, bossType, player }) => {

    var color2 = false;

    if(index %2){
        color2 = true;
    }

    return(
    <div className={`${visibility && (color2 ? 'terrainStyle2' : 'terrainStyle1')}`}>
        <div className='elementContainer'>
               
        </div>
    </div>);

}