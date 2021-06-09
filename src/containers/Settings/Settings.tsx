import React from 'react';
import './Settings.css'
import { Link, Redirect, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map } from '../../components/Map/Map';
import { Boss } from '../../components/Boss/Boss';
import { Elements } from '../../components/Elements/Elements';

interface SettingsProps{
    rows: number,
    columns: number,
    onRowsDecrease: () => void;
    onRowsIncrease: () => void;
    onColumnDecrease: () => void;
    onColumnIncrease: () => void;
    onMatrixChange: () => void;
    onVisibilityChange: (index: number) => void;
    onBossVisibilityChange: (index: number, type: string) => void;
    onPotionVisibilityChange: (index: number, type: string) => void;
    onShieldVisibilityChange: (index: number, type: string) => void;
    onSwordVisibilityChange: (index: number, type: string) => void;
    onTerrainTypeChange: (terrainType: number) => void;
}

export const Settings: React.FC<SettingsProps> = ( {rows, columns, onRowsDecrease, onRowsIncrease, onColumnDecrease, onColumnIncrease, onMatrixChange, onVisibilityChange, onBossVisibilityChange, onPotionVisibilityChange, onShieldVisibilityChange, onSwordVisibilityChange, onTerrainTypeChange } ) => {

    return(
        <div className='settingsContainer'>
            <div className='settingsButtons'>
                {/* <button className='btnOn enemyBtn'></button>
                <button className='btnOff mapBtn'></button>
                <button className='btnOff elementsBtn'></button> */}
                <Link to="/map" className='btnOn mapBtn'></Link>
                <Link to="/boss" className='btnOff bossBtn'></Link>
                <Link to="/elements" className='btnOff elementsBtn'></Link>
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
                            bossType = {''}
                            bossColor = {0}
                            index = {0}
                            rows = {rows}
                            columns = {columns}
                            onBossVisibilityChange = {onBossVisibilityChange}
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
                           onPotionVisibilityChange = {onPotionVisibilityChange}
                           onShieldVisibilityChange = {onShieldVisibilityChange}
                           onSwordVisibilityChange = {onSwordVisibilityChange}
                           ></Elements>
                        </motion.div>}>
                    </Route>
                
            </div>
        </div>
    );
}