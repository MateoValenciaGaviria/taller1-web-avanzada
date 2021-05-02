import React from 'react'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { ElementFeatures } from '../ElementFeatures/ElementFeatures';
import { Route, Redirect, Link } from 'react-router-dom';
import './Elements.css';

interface ElementsProps{
    rows: number,
    columns: number,
    potion: string,
    shield: string,
    sword: string,
    onPotionVisibilityChange: (index: number) => void;
    onShieldVisibilityChange: (index: number) => void;
    onSwordVisibilityChange: (index: number) => void;
}

export const Elements: React.FC<ElementsProps> = ( { rows, columns, potion, shield, sword, onPotionVisibilityChange, onShieldVisibilityChange, onSwordVisibilityChange } ) => {

    const potionimageSrc = getImageSrcFromType(`${potion}`);
    const shieldimageSrc = getImageSrcFromType(`${shield}`);
    const swordimageSrc = getImageSrcFromType(`${sword}`);

    return(
        <div className='mainElementsContainer'>
            <div className = 'elementsButtonsContainer'>
                <Link to="/elements/potion" className = 'elementBtnSelected'></Link>
                <Link to="/elements/shield"className = 'elementBtn'></Link>
                <Link to="/elements/sword" className = 'elementBtn'></Link>
            </div>
            <Redirect from='/elements' exact to='/elements/potion'></Redirect>
            <Route path='/elements/potion' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onPotionVisibilityChange}
                    ></ElementFeatures>
                </div>}>
            </Route>
            <Route path='/elements/shield' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onShieldVisibilityChange}
                    ></ElementFeatures>
                </div>}>
            </Route>
            <Route path='/elements/sword' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onSwordVisibilityChange}
                    ></ElementFeatures>
                </div>}>
            </Route>
        </div>
    );
}