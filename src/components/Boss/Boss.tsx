import React from 'react';
import { MatrixContainer } from '../../containers/MatrixContainer/MatrixContainer';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import './Boss.css';

interface BossProps{
    bossType: string;
    bossColor: number;
    index: number;
}

export const Boss: React.FC<BossProps> = ( { bossType, bossColor, index} ) => {

    const imageSrc = getImageSrcFromType(`${bossType}${bossColor}`);

    return(
    <div className='mainBossContainer'> 
        <div>Boss</div>
        <div></div>
        <MatrixContainer></MatrixContainer>
    </div>);
} 
