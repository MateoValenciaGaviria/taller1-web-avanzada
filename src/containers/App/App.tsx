import React from 'react';
import { Display } from '../../containers/Display/Display';
import { Settings } from '../../containers/Settings/Settings';

export const App = () => {

    return(
        <main>
            <Display></Display>
            <Settings></Settings>
        </main>
    );
}