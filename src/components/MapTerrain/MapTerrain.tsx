import React from 'react';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import './MapTerrain.css';

interface MapTerrainProps{
    rows: number,
    columns: number,
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

export const MapTerrain: React.FC<MapTerrainProps> = ({ rows, columns, index, type, visibility, potion, sword, shield, boss, bossType, player }) => {

    var color2 = false;

    if((columns % 2) == 0){

        if (index >= columns && index < columns*2) {
            index++;
        }

        if (index >= columns*3 && index < columns*4) {
            index++;
        }

        if (index >= columns*5 && index < columns*6) {
            index++;
        } 
    }
    
    if((index % 2) == 0){
        color2 = true;
    }

    return(
    <div className={`${visibility && (color2 ? 'terrainStyle2' : 'terrainStyle1')}`}>
        <div className={`${(visibility && (boss || potion || shield || sword )) && 'elementContainer'}`}>
               
        </div>
    </div>);

}