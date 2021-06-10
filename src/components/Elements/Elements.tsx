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
    onPotionVisibilityChange: (index: number, type: string) => void;
    onShieldVisibilityChange: (index: number, type: string) => void;
    onSwordVisibilityChange: (index: number, type: string) => void;
}

export const Elements: React.FC<ElementsProps> = ( { rows, columns, potion, shield, sword, onPotionVisibilityChange, onShieldVisibilityChange, onSwordVisibilityChange } ) => {

    const potionimageSrc = getImageSrcFromType("potiondefault");
    const shieldimageSrc = getImageSrcFromType("shielddefault");
    const swordimageSrc = getImageSrcFromType("sworddefault");

    const [ activeLink, setactiveLink ] = React.useState(1);

    const handlePotion = () => {
        setactiveLink(1);
    }
    const handleShield = () => {
        setactiveLink(2);
    }
    const handleSword = () => {
        setactiveLink(3);
    }

    return(
        <div className='mainElementsContainer'>
            <div className = 'elementsButtonsContainer'>
                <Link onClick={handlePotion} to="/elements/potion" className={`${(activeLink == 1) ? 'elementBtnSelected' : 'elementBtn'}`}>
                    <img className='elementIcon' src = {potionimageSrc}/>
                </Link>
                <Link onClick={handleShield} to="/elements/shield"className={`${(activeLink == 2) ? 'elementBtnSelected' : 'elementBtn'}`}>
                    <img className='elementIcon' src = {shieldimageSrc}/>
                </Link>
                <Link onClick={handleSword} to="/elements/sword" className={`${(activeLink == 3) ? 'elementBtnSelected' : 'elementBtn'}`}>
                    <img className='elementIcon' src = {swordimageSrc}/>
                </Link>
            </div>
            <Redirect from='/elements' exact to='/elements/potion'></Redirect>
            <Route path='/elements/potion' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onPotionVisibilityChange}
                    type = {potion}
                    ></ElementFeatures>
                </div>}>
            </Route>
            <Route path='/elements/shield' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onShieldVisibilityChange}
                    type = {shield}
                    ></ElementFeatures>
                </div>}>
            </Route>
            <Route path='/elements/sword' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onSwordVisibilityChange}
                    type = {sword}
                    ></ElementFeatures>
                </div>}>
            </Route>
        </div>
    );
}