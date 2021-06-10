import React from 'react'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { ElementFeatures } from '../ElementFeatures/ElementFeatures';
import { Route, Redirect, Link } from 'react-router-dom';
import { TerrainType } from '../../utils/TerrainType';
import './Elements.css';

interface ElementsProps{
    rows: number,
    columns: number,
    potion: string,
    shield: string,
    sword: string,
    globalBossIndex: number,
    globalPotionIndex: number,
    globalShieldIndex: number,
    globalSwordIndex: number,
    terrains: TerrainType[],
    onPotionIndexChange: (index: number, type: string) => void;
    onShieldIndexChange: (index: number, type: string) => void;
    onSwordIndexChange: (index: number, type: string) => void;
}

export const Elements: React.FC<ElementsProps> = ( { rows, columns, potion, shield, sword,  globalBossIndex, globalPotionIndex, globalShieldIndex, globalSwordIndex, terrains, onPotionIndexChange, onShieldIndexChange, onSwordIndexChange } ) => {

    const potionimageSrc = getImageSrcFromType("potion");
    const shieldimageSrc = getImageSrcFromType("shield");
    const swordimageSrc = getImageSrcFromType("sword");

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
                    onElementVisibilityChange = {onPotionIndexChange}
                    type = {potion}
                    globalBossIndex = {globalBossIndex}
                    globalPotionIndex = {globalPotionIndex}
                    globalShieldIndex = {globalShieldIndex}
                    globalSwordIndex = {globalSwordIndex}
                    terrains = {terrains}
                    ></ElementFeatures>
                </div>}>
            </Route>
            <Route path='/elements/shield' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onShieldIndexChange}
                    type = {shield}
                    globalBossIndex = {globalBossIndex}
                    globalPotionIndex = {globalPotionIndex}
                    globalShieldIndex = {globalShieldIndex}
                    globalSwordIndex = {globalSwordIndex}
                    terrains = {terrains}
                    ></ElementFeatures>
                </div>}>
            </Route>
            <Route path='/elements/sword' render={() => 
                <div className='mapSettingsContainer'>
                    <ElementFeatures
                    rows = {rows}
                    columns = {columns}
                    onElementVisibilityChange = {onSwordIndexChange}
                    type = {sword}
                    globalBossIndex = {globalBossIndex}
                    globalPotionIndex = {globalPotionIndex}
                    globalShieldIndex = {globalShieldIndex}
                    globalSwordIndex = {globalSwordIndex}
                    terrains = {terrains}
                    ></ElementFeatures>
                </div>}>
            </Route>
        </div>
    );
}