import React from 'react';
import './Settings.css'
import { BrowserRouter, Route } from 'react-router-dom';
import { Map } from '../../components/Map/Map';
import { Boss } from '../../components/Boss/Boss';
import { Elements } from '../../components/Elements/Elements';

export const Settings = () => {

    return(
        <div className='settingsContainer'>
            <div className='settingsButtons'>
                <button className='btnOn enemyBtn'></button>
                <button className='btnOff mapBtn'></button>
                <button className='btnOff elementsBtn'></button>
            </div>
            <div className='settingsMenu'>
                <BrowserRouter>
                    <Route path='/map' render={() => 
                        <div className='mapSettingsContainer'>
                            <Map 
                            mapType = {''}
                            columns = {0}
                            rows = {0}
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
                </BrowserRouter>
            </div>
        </div>
    );
}