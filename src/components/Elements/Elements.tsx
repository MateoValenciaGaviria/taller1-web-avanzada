import React from 'react'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { ElementFeaturesContainer } from '../../containers/ElementFeaturesContainer/ElementFeaturesContainer';
import './Elements.css';

interface ElementsProps{
    potion: string,
    shield: string,
    sword: string
}

export const Elements: React.FC<ElementsProps> = ( { potion, shield, sword } ) => {

    const potionimageSrc = getImageSrcFromType(`${potion}`);
    const shieldimageSrc = getImageSrcFromType(`${shield}`);
    const swordimageSrc = getImageSrcFromType(`${sword}`);

    return(
        <div className='mainElementsContainer'>
            <div></div>
            <ElementFeaturesContainer></ElementFeaturesContainer>
        </div>
    );
}