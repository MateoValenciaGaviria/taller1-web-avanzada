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
    }
    const handleRowsIncrease = () => {
        if(rows < 6){
            setRows(rows+1);
        }  
    }

    const [ columns, setColumns ] = React.useState(1);
    const handleColumnsDecrease = () => {
        if(columns > 1){
            setColumns(columns-1);
        }  
    }
    const handleColumnsIncrease = () => {
        if(columns < 11){
            setColumns(columns+1);
        }  
    }

    const [ terrains, setTerrains ] = React.useState(initialMap);

    const handleVisibilityChange = (index: number) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();
        currentMap[i].visibility = !currentMap[i].visibility;
        setTerrains(currentMap);
    }

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

    React.useEffect(() => {
        handleOnMatrixChange();
    }, [ columns, rows ]);

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