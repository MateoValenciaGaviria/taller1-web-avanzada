import React from 'react';
import './Settings.css'
import { BrowserRouter, Link, Route } from 'react-router-dom';
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
    onVisibilityChange: (index?: number) => void;
}

export const Settings: React.FC<SettingsProps> = ( {rows, columns, onRowsDecrease, onRowsIncrease, onColumnDecrease, onColumnIncrease, onMatrixChange, onVisibilityChange} ) => {

    return(
        <div className='settingsContainer'>
            <BrowserRouter>
            <div className='settingsButtons'>
                {/* <button className='btnOn enemyBtn'></button>
                <button className='btnOff mapBtn'></button>
                <button className='btnOff elementsBtn'></button> */}
                <Link to="/map" className='btnOn mapBtn'></Link>
                <Link to="/boss" className='btnOff bossBtn'></Link>
                <Link to="/elements" className='btnOff elementsBtn'></Link>
            </div>
            <div className='settingsMenu'>
                    <Route path='/map' render={() => 
                        <div className='mapSettingsContainer'>
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
                            ></Map>
                        </div>}>
                    </Route>
                    <Route path='/boss' render={() => 
                        <div className='bossSettingsContainer'>
                            <Boss
                            bossType = {''}
                            bossColor = {0}
                            index = {0}
                            ></Boss>
                        </div>}>
                    </Route>
                    <Route path='/elements' render={() => 
                        <div className='elementsSettingsContainer'>
                           <Elements
                           potion = {'potion'}
                           shield = {'shield'}
                           sword = {'sword'}
                           ></Elements>
                        </div>}>
                    </Route>
                
            </div>
            </BrowserRouter>
        </div>
    );
}