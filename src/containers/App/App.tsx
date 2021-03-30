import React from 'react';
import { Display } from '../../containers/Display/Display';
import { Settings } from '../../containers/Settings/Settings';
import './App.css'

export const App = () => {

    return(
        <main>
            <Display></Display>
            <Settings></Settings>
        </main>
    );
}