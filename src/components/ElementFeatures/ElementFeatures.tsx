import React from 'react';
import './ElementFeatures.css';

interface ElementFeaturesProps{
    visibility: boolean
    posX: number;
    posY: number;
}

export const ElementFeatures: React.FC<ElementFeaturesProps> = ( { visibility, posX, posY } ) => {

    return(<div></div>);
} 