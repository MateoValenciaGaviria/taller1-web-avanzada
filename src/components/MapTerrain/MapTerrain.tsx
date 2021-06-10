import React from 'react';
import { motion } from "framer-motion"
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import './MapTerrain.css';

interface MapTerrainProps{
    rows: number,
    columns: number,
    index: number,
    type: number,
    visibility: boolean,
    potion: boolean,
    sword: boolean,
    shield: boolean,
    boss: boolean,
    bossType: number,
    player: boolean,
    iconSrc: string,
}

export const MapTerrain: React.FC<MapTerrainProps> = ({ rows, columns, index, type, visibility, potion, sword, shield, boss, bossType, player, iconSrc }) => {

    var color2 = false;

    var grass1Src = getImageSrcFromType("terrain/greengrass1");
    var dirt1Src = getImageSrcFromType("terrain/greendirt1");

    var grass2Src = getImageSrcFromType("terrain/greengrass2");
    var dirt2Src = getImageSrcFromType("terrain/greendirt2");

    var elementIconSrc = getImageSrcFromType(iconSrc);
    
    switch (type) {
        case 0:
            grass1Src = getImageSrcFromType("terrain/greengrass1");
            dirt1Src = getImageSrcFromType("terrain/greendirt1");
            grass2Src = getImageSrcFromType("terrain/greengrass2");
            dirt2Src = getImageSrcFromType("terrain/greendirt2");
            break;
        case 1:
            grass1Src = getImageSrcFromType("terrain/bluegrass1");
            dirt1Src = getImageSrcFromType("terrain/bluedirt1");
            grass2Src = getImageSrcFromType("terrain/bluegrass2");
            dirt2Src = getImageSrcFromType("terrain/bluedirt2");
            break;    
        case 2:
            grass1Src = getImageSrcFromType("terrain/redgrass1");
            dirt1Src = getImageSrcFromType("terrain/reddirt1");
            grass2Src = getImageSrcFromType("terrain/redgrass2");
            dirt2Src = getImageSrcFromType("terrain/reddirt2");
            break;
        case 3:
            grass1Src = getImageSrcFromType("terrain/pinkgrass1");
            dirt1Src = getImageSrcFromType("terrain/pinkdirt1");
            grass2Src = getImageSrcFromType("terrain/pinkgrass2");
            dirt2Src = getImageSrcFromType("terrain/pinkdirt2");
            break;   
    }
    
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
    <div>
        <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0}}
        transition={{ ease: "easeInOut", duration: 0.3 }} 
        className={`${visibility && (color2 ? 'terrainStyle1' : 'terrainNone')}`}>
            <img className='terrainBg' src = {grass1Src} />
            <div className={`${(visibility && (boss || potion || shield || sword )) && (boss) ? 'elementBossContainer' : 'elementContainer'}`}>
                <img className={`${(visibility && (boss || potion || shield || sword )) && 'imgIconContainer'}`} src={elementIconSrc} alt=""/>
            </div>
            <div className={`${(visibility ? 'dirtContainer1': 'terrainNone')}`}>
                <img className='dirtBg' src = {dirt1Src} />
            </div>
        </motion.div>
        <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0}}
        transition={{ ease: "easeInOut", duration: 0.3 }} 
        className={`${visibility && (!color2 ? 'terrainStyle2' : 'terrainNone')}`}>
            <img className='terrainBg' src = {grass2Src}  />
            <div className={`${(visibility && (boss || potion || shield || sword )) && (boss) ? 'elementBossContainer' : 'elementContainer'}`}>
                <img className={`${(visibility && (boss || potion || shield || sword )) && 'imgIconContainer'}`} src={elementIconSrc} alt=""/>
            </div>
            <div className={`${(visibility ? 'dirtContainer2': 'terrainNone')}`}>
                <img className='dirtBg' src = {dirt2Src} />
            </div>
        </motion.div>
    </div>);

}