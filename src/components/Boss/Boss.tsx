import React from 'react';
import { motion } from 'framer-motion';
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
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className = 'arrowBtn'>
                <img className='arrowBtnBg' src = "./images/file_extensions/leftarrow.png"/>
            </motion.button >
                <div className = 'bossImgContainer'>
                    <img className='bossImg' src = './images/file_extensions/characters/skeleton1.png' />
                </div>
            <motion.button  
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className = 'arrowBtn'>
                <img className='arrowBtnBg' src = "./images/file_extensions/rightarrow.png"/>
            </motion.button >
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