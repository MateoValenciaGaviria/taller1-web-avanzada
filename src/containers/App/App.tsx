import React from 'react';
import { Display } from '../../containers/Display/Display';
import { Settings } from '../../containers/Settings/Settings';
import './App.css'

const initialMap = [
    {
        index: 0,
        type: '',
        visibility: true,
        potion: false,
        sword: false,
        shield: false,
        boss: false,
        bossType: 0,
        player: false,
    }
];

export const App = () => {

    const [ rows, setRows ] = React.useState(1);
    const handleRowsDecrease = () => {
        if(rows > 1){
            setRows(rows-1);
        }  
        handleOnMatrixChange();
    }
    const handleRowsIncrease = () => {
        if(rows < 6){
            setRows(rows+1);
        }  
        handleOnMatrixChange();
    }

    const [ columns, setColumns ] = React.useState(1);
    const handleColumnsDecrease = () => {
        if(columns > 1){
            setColumns(columns-1);
        }  
        handleOnMatrixChange();
    }
    const handleColumnsIncrease = () => {
        if(columns < 11){
            setColumns(columns+1);
        }  
        handleOnMatrixChange();
    }

    const [ visibility, setVisibility ] = React.useState(initialMap);
    const handleVisibilityChange = (index?: number) => {
        const i = visibility.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = visibility.slice();
        setVisibility(currentMap);
    }

    const [ terrains, setTerrains ] = React.useState(initialMap);

    const handleOnMatrixChange = () => {
        var indexTerrain = 0;
        var temporalTerrain = [];
        
        for (let i = 0; i < (rows * columns); i++) {
            const newTerrain = {
            index: indexTerrain,
            type: '',
            visibility: true,
            potion: false,
            sword: false,
            shield: false,
            boss: false,
            bossType: 0,
            player: false,
            };
            indexTerrain ++;
            temporalTerrain.push(newTerrain);
        }   
        setTerrains(temporalTerrain);
    }

    return(
        <main>
            <Display
            rows = {rows}
            columns = {columns}
            terrains = {terrains}
            ></Display>
            <Settings
            rows = {rows}
            columns = {columns}
            onRowsDecrease = {handleRowsDecrease}
            onRowsIncrease = {handleRowsIncrease}
            onColumnDecrease = {handleColumnsDecrease}
            onColumnIncrease = {handleColumnsIncrease}
            onMatrixChange = {handleOnMatrixChange}
            onVisibilityChange = {handleVisibilityChange}
            ></Settings>
        </main>
    );
}