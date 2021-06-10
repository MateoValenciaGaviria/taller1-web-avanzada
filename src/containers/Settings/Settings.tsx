import React from 'react';
import './Settings.css'
import { Link, Redirect, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map } from '../../components/Map/Map';
import { Boss } from '../../components/Boss/Boss';
import { Elements } from '../../components/Elements/Elements';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { TerrainType } from '../../utils/TerrainType';

interface SettingsProps{
    rows: number,
    columns: number,
    globalBossType: string,
    globalBossIndex: number,
    globalPotionIndex: number,
    globalShieldIndex: number,
    globalSwordIndex: number,
    terrains: TerrainType[],
    onRowsDecrease: () => void;
    onRowsIncrease: () => void;
    onColumnDecrease: () => void;
    onColumnIncrease: () => void;
    onMatrixChange: () => void;
    onVisibilityChange: (index: number) => void;
    onBossTypeChange: (bossType: string) => void;
    onTerrainTypeChange: (terrainType: number) => void;
    onBossIndexChange: (index: number) => void;
    onPotionIndexChange: (index: number) => void;
    onShieldIndexChange: (index: number) => void;
    onSwordIndexChange: (index: number) => void;
}

export const Settings: React.FC<SettingsProps> = ( {rows, columns, globalBossType, globalBossIndex, globalPotionIndex, globalShieldIndex, globalSwordIndex, terrains, onRowsDecrease, onRowsIncrease, onColumnDecrease, onColumnIncrease, onMatrixChange, onVisibilityChange, onTerrainTypeChange, onBossTypeChange, onBossIndexChange, onPotionIndexChange, onShieldIndexChange, onSwordIndexChange } ) => {

    const [ activeLink, setactiveLink ] = React.useState(1);

    const handleTerrainBtn = () => {
        setactiveLink(1);
    }
    const handleBossBtn = () => {
        setactiveLink(2);
    }
    const handleElementBtn = () => {
        setactiveLink(3);
    }

    const terrainIconSrc = getImageSrcFromType("terrainicon");
    const bossIconSrc = getImageSrcFromType("/bossicon");
    const potionIconSrc = getImageSrcFromType("/potionicon");


    return(
        <div className='settingsContainer'>
            <div className='settingsButtons'>
                {/* <button className='btnOn enemyBtn'></button>
                <button className='btnOff mapBtn'></button>
                <button className='btnOff elementsBtn'></button> */}
                <Link onClick={handleTerrainBtn} to="/map" className={`${(activeLink == 1) ? 'btnOn' : 'btnOff'}`}>
                    <img className='linkIcon' src={terrainIconSrc} />
                </Link>
                <Link onClick={handleBossBtn} to="/boss" className={`${(activeLink == 2) ? 'btnOn' : 'btnOff'}`}>
                    <img className='linkIcon' src={bossIconSrc} />
                </Link>
                <Link onClick={handleElementBtn} to="/elements" className={`${(activeLink == 3) ? 'btnOn' : 'btnOff'}`}>
                    <img className='linkIcon' src={potionIconSrc} />
                </Link>
            </div>
            <div className='settingsMenu'>
                <Redirect from='/' exact to='/map'></Redirect>
                    <Route path='/map' render={() => 
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        className='mapSettingsContainer'>
                            <Map 
                            mapType = {''}
                            rows = {rows}
                            columns = {columns}
                            globalBossIndex = {globalBossIndex}
                            globalPotionIndex = {globalPotionIndex}
                            globalShieldIndex = {globalShieldIndex}
                            globalSwordIndex = {globalSwordIndex}
                            terrains = {terrains}
                            onRowsDecrease = {onRowsDecrease}
                            onRowsIncrease = {onRowsIncrease}
                            onColumnDecrease = {onColumnDecrease}
                            onColumnIncrease = {onColumnIncrease}
                            onMatrixChange = {onMatrixChange}
                            onVisibilityChange = {onVisibilityChange}
                            onTerrainTypeChange = {onTerrainTypeChange}
                            ></Map>
                        </motion.div>}>
                    </Route>
                    <Route path='/boss' render={() => 
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}className='bossSettingsContainer'>
                            <Boss
                            bossType = {globalBossType}
                            bossColor = {0}
                            index = {0}
                            rows = {rows}
                            columns = {columns}
                            globalBossIndex = {globalBossIndex}
                            globalPotionIndex = {globalPotionIndex}
                            globalShieldIndex = {globalShieldIndex}
                            globalSwordIndex = {globalSwordIndex}
                            terrains = {terrains}
                            onBossTypeChange = {onBossTypeChange}
                            onBossPositionChange = {onBossIndexChange}
                            ></Boss>
                        </motion.div>}>
                    </Route>
                    <Route path='/elements' render={() => 
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}className='elementsSettingsContainer'>
                           <Elements
                           rows = {rows}
                           columns = {columns}
                           potion = {'potion'}
                           shield = {'shield'}
                           sword = {'sword'}
                           globalPotionIndex = {globalPotionIndex}
                           globalShieldIndex = {globalShieldIndex}
                           globalSwordIndex = {globalSwordIndex}
                           terrains = {terrains}
                           onPotionIndexChange = {onPotionIndexChange}
                           onShieldIndexChange = {onShieldIndexChange}
                           onSwordIndexChange = {onSwordIndexChange}
                           globalBossIndex = {globalBossIndex}
                           ></Elements>
                        </motion.div>}>
                    </Route>
                
            </div>
        </div>
    );
}