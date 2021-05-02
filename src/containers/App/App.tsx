import React from 'react';
import { Display } from '../../containers/Display/Display';
import { Settings } from '../../containers/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';
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
        currentMap[i].potion = false;
        currentMap[i].sword = false;
        currentMap[i].shield = false;
        currentMap[i].boss = false;
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

    const handleOnBossVisibilityChange = (index: number) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();
        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].boss == true &&  i != j) {
                currentMap[j].boss = false;
            }
        }
        currentMap[i].boss = !currentMap[i].boss;
        currentMap[i].potion = false;
        currentMap[i].sword = false;
        currentMap[i].shield = false;
        setTerrains(currentMap);
    }

    const handleOnPotionVisibilityChange = (index: number) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();
        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].potion == true &&  i != j) {
                currentMap[j].potion = false;
            }
        }
        currentMap[i].potion = !currentMap[i].potion;
        currentMap[i].sword = false;
        currentMap[i].shield = false;
        currentMap[i].boss = false;
        setTerrains(currentMap);
    }

    const handleOnShieldVisibilityChange = (index: number) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();
        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].shield == true &&  i != j) {
                currentMap[j].shield = false;
            }
        }
        currentMap[i].shield = !currentMap[i].shield;
        currentMap[i].potion = false;
        currentMap[i].sword = false;
        currentMap[i].boss = false;
        setTerrains(currentMap);
    }

    const handleOnSwordVisibilityChange = (index: number) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();
        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].sword == true &&  i != j) {
                currentMap[j].sword = false;
            }
        }
        currentMap[i].sword = !currentMap[i].sword;
        currentMap[i].potion = false;
        currentMap[i].shield = false;
        currentMap[i].boss = false;
        setTerrains(currentMap);
    }

    const restartElementsVisibility = () => {
        const currentMap = terrains.slice();
        for (let j = 0; j < currentMap.length; j++) {
            currentMap[j].potion = false;
            currentMap[j].sword = false;
            currentMap[j].shield = false;
            currentMap[j].boss = false;
        }
        setTerrains(currentMap);
    }

    React.useEffect(() => {
        handleOnMatrixChange();
    }, [ columns, rows ]);

    return(
        <main>
            <BrowserRouter>
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
            onBossVisibilityChange = {handleOnBossVisibilityChange}
            onPotionVisibilityChange = {handleOnPotionVisibilityChange}
            onShieldVisibilityChange = {handleOnShieldVisibilityChange}
            onSwordVisibilityChange = {handleOnSwordVisibilityChange}
            ></Settings>
            </BrowserRouter>
        </main>
    );
}