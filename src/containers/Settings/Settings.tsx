import React from 'react';
import './Settings.css'

export const Settings = () => {

    return(
        <div className='settingsContainer'>
            <div className='settingsButtons'>
                <button className='btnOn enemyBtn'></button>
                <button className='btnOff mapBtn'></button>
                <button className='btnOff elementsBtn'></button>
            </div>
            <div className='settingsMenu'>

            </div>
        </div>
    );
}