import React from 'react';
import { motion } from 'framer-motion';
import { Matrix } from '../Matrix/Matrix';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { TerrainType } from '../../utils/TerrainType';
import './Boss.css';

interface BossProps{
    bossType: string;
    bossColor: number;
    index: number;
    rows: number,
    columns: number,
    globalBossIndex: number,
    globalPotionIndex: number,
    globalShieldIndex: number,
    globalSwordIndex: number,
    terrains: TerrainType[],
    onBossPositionChange: (index:number) => void;
    onBossTypeChange: (bossType: string) => void;
}

export const Boss: React.FC<BossProps> = ( { rows, columns, bossType, globalBossIndex, globalPotionIndex, globalShieldIndex, globalSwordIndex, terrains, onBossPositionChange, onBossTypeChange} ) => {

    const leftArrowImgSrc = getImageSrcFromType("leftarrow");
    const rightArrowImgSrc = getImageSrcFromType("rightarrow");

    const [ bossSettingsImgSrc, setBossSettingsImgSrc] = React.useState("characters/skeleton1");
    const [ bossIconSrc, setbossIconSrc ] = React.useState(bossSettingsImgSrc+"s");

    const handleRightClick = () => {
        switch (bossSettingsImgSrc) {
            case "characters/skeleton1":
                setBossSettingsImgSrc("characters/skeleton2");
                break;
            case "characters/skeleton2":
                setBossSettingsImgSrc("characters/knight1");
                break;
            case "characters/knight1":
                setBossSettingsImgSrc("characters/knight2");
                break;
            case "characters/knight2":
                setBossSettingsImgSrc("characters/skeleton1");
                break;
        }
    } 

    const handleLeftClick = () => {
        switch (bossSettingsImgSrc) {
            case "characters/skeleton1":
                setBossSettingsImgSrc("characters/knight2");
                break;
            case "characters/knight2":
                setBossSettingsImgSrc("characters/knight1");
                break;
            case "characters/knight1":
                setBossSettingsImgSrc("characters/skeleton2");
                break;
            case "characters/skeleton2":
                setBossSettingsImgSrc("characters/skeleton1");
                break;
        }
    } 

    const handleBossIconSrc = (type: string) => {
        setbossIconSrc(type);
    }

    React.useEffect(() => {
        handleBossIconSrc(bossSettingsImgSrc+"s");
        console.log("IconSrc :"+bossSettingsImgSrc);
        console.log("IconSrc :"+bossIconSrc);
        onBossTypeChange(bossIconSrc);
    }, [ bossSettingsImgSrc ]);

    return(
    <div className='mainBossContainer'> 
        <div className = 'bossSettingsContainer'>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className = 'arrowBtn'
            onClick={handleLeftClick}>
                <img className='arrowBtnBg' src = {leftArrowImgSrc}/>
            </motion.button >
                <div className = 'bossImgContainer'>
                    <img className='bossImg' src = {getImageSrcFromType(bossSettingsImgSrc)} />
                </div>
            <motion.button  
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className = 'arrowBtn'
            onClick={handleRightClick}>
                <img className='arrowBtnBg' src = {rightArrowImgSrc}/>
            </motion.button >
        </div>
        <div></div>
        <Matrix
        rows = {rows}
        columns = {columns}
        onMatrixClick = {onBossPositionChange}
        type = {bossType}
        globalBossIndex = {globalBossIndex}
        globalPotionIndex = {globalPotionIndex}
        globalShieldIndex = {globalShieldIndex}
        globalSwordIndex = {globalSwordIndex}
        terrains = {terrains}
        ></Matrix>
    </div>);
} 
