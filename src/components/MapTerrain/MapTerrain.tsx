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
    var grass1Src = "./images/file_extensions/terrain/greengrass1.png";
    var dirt1Src = "./images/file_extensions/terrain/greendirt1.png";

    var grass2Src = "./images/file_extensions/terrain/greengrass2.png";
    var dirt2Src = "./images/file_extensions/terrain/greendirt2.png";
    
    switch (type) {
        case 0:
            grass1Src = "./images/file_extensions/terrain/greengrass1.png";
            dirt1Src = "./images/file_extensions/terrain/greendirt1.png";
            grass2Src = "./images/file_extensions/terrain/greengrass2.png";
            dirt2Src = "./images/file_extensions/terrain/greendirt2.png";
            break;
        case 1:
            grass1Src = "./images/file_extensions/terrain/bluegrass1.png";
            dirt1Src = "./images/file_extensions/terrain/bluedirt1.png";
            grass2Src = "./images/file_extensions/terrain/bluegrass2.png";
            dirt2Src = "./images/file_extensions/terrain/bluedirt2.png";
            break;    
        case 2:
            grass1Src = "./images/file_extensions/terrain/redgrass1.png";
            dirt1Src = "./images/file_extensions/terrain/reddirt1.png";
            grass2Src = "./images/file_extensions/terrain/redgrass2.png";
            dirt2Src = "./images/file_extensions/terrain/reddirt2.png";
            break;
        case 3:
            grass1Src = "./images/file_extensions/terrain/pinkgrass1.png";
            dirt1Src = "./images/file_extensions/terrain/pinkdirt1.png";
            grass2Src = "./images/file_extensions/terrain/pinkgrass2.png";
            dirt2Src = "./images/file_extensions/terrain/pinkdirt2.png";
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
            <div className={`${(visibility && (boss || potion || shield || sword )) && 'elementContainer'}`}>
                <img className={`${(visibility && (boss || potion || shield || sword )) && 'imgIconContainer'}`} src={iconSrc} alt=""/>
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
            <div className={`${(visibility && (boss || potion || shield || sword )) && 'elementContainer'}`}>
                <img className={`${(visibility && (boss || potion || shield || sword )) && 'imgIconContainer'}`} src={iconSrc} alt=""/>
            </div>
            <div className={`${(visibility ? 'dirtContainer2': 'terrainNone')}`}>
                <img className='dirtBg' src = {dirt2Src} />
            </div>
        </motion.div>
    </div>);

}