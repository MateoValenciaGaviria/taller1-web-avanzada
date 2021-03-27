import React from 'react';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import './Boss.css';

interface BossProps{
    bossType: string;
    bossColor: number;
    posX: number;
    posY: number;
}

export const Boss: React.FC<BossProps> = ( { bossType, bossColor, posX, posY } ) => {

    const imageSrc = getImageSrcFromType(`${bossType}${bossColor}`);

    return(<div></div>);
} 
