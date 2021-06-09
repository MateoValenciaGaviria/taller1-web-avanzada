import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Display } from '../../containers/Display/Display';
import { Settings } from '../../containers/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';

const initialMap = [
    {
        index: 0,
        type: 0,
        visibility: true,
        potion: false,
        sword: false,
        shield: false,
        boss: false,
        bossType: 0,
        player: false,
        iconSrc: '',
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
    const [ globalTerrainType, setglobalTerrainType ] = React.useState(0);

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

    const handleTerrainTypeChange = (numberType: number) => {
        setglobalTerrainType(numberType);
        const currentMap = terrains.slice();
        for (let i = 0; i < currentMap.length; i++) {
            currentMap[i].type = numberType;
        }
        setTerrains(currentMap);
    }

    const handleOnMatrixChange = () => {
        /*const temporalTerrain = terrains.slice();
        var terrainsNumber = rows * columns;
        var terrainsNumberDifference = 0;
        var increase = false
        if (temporalTerrain.length > terrainsNumber) {
           terrainsNumberDifference = temporalTerrain.length - terrainsNumber;
           console.log("resta"+terrainsNumberDifference);
        }else{
            terrainsNumberDifference = terrainsNumber - temporalTerrain.length;
            console.log("suma"+terrainsNumberDifference);
            increase = true;
        }
        for (let i = 0; i < terrainsNumberDifference; i++) {
            if (increase) {
                const newTerrain = {
                index: temporalTerrain.length,
                type: '',
                visibility: true,
                potion: false,
                sword: false,
                shield: false,
                boss: false,
                bossType: 0,
                player: false,
                iconSrc: '',
                };
                temporalTerrain.push(newTerrain);    
            }else{
                temporalTerrain.pop();
            } 
        }
            */
        var temporalTerrain = [];
        var indexTerrain = 0;
        for (let i = 0; i < (rows * columns); i++) {
            const newTerrain = {
            index: indexTerrain,
            type: globalTerrainType,
            visibility: true,
            potion: false,
            sword: false,
            shield: false,
            boss: false,
            bossType: 0,
            player: false,
            iconSrc: '',
            }; 
            indexTerrain ++;
            temporalTerrain.push(newTerrain);
        }
        setTerrains(temporalTerrain);
    }

    const handleOnMatrixColumnsChange = () => {
        const temporalTerrain = terrains.slice();
        var terrainsNumber = rows * columns;
        var terrainsNumberDifference = 0;
        var increase = false
        if (temporalTerrain.length > terrainsNumber) {
           terrainsNumberDifference = temporalTerrain.length - terrainsNumber;
        }else{
            terrainsNumberDifference = terrainsNumber - temporalTerrain.length;
            increase = true;
        }

        for (let i = 0; i < columns; i++) {
            if (increase) {
                const newTerrain = {
                index: 0,
                type: 0,
                visibility: true,
                potion: false,
                sword: false,
                shield: false,
                boss: false,
                bossType: 0,
                player: false,
                iconSrc: '',
                };
                var terrainCopy = temporalTerrain.slice();
                temporalTerrain.push(newTerrain);    
            }else{
                temporalTerrain.pop();
            } 
        }
        setTerrains(temporalTerrain);
    }

    const handleOnMatrixRowsChange = () => {

    }

    const handleOnBossVisibilityChange = (index: number, type: string) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();

        if(!currentMap[i].potion && !currentMap[i].shield && !currentMap[i].sword){
            currentMap[i].boss = !currentMap[i].boss;
        }

        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].boss == true &&  (i != j) && 
            (!currentMap[i].potion || !currentMap[i].shield || !currentMap[i].sword)) {
                currentMap[j].boss = false;
            }
        }

        setTerrains(currentMap);

        handleIconChange(index, type);
    }

    const handleOnPotionVisibilityChange = (index: number, type: string) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();

        if(!currentMap[i].boss && !currentMap[i].shield && !currentMap[i].sword){
            currentMap[i].potion = !currentMap[i].potion;
        }

        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].potion == true &&  (i != j) && 
            (!currentMap[i].boss || !currentMap[i].sword || !currentMap[i].shield)) {
                currentMap[j].potion = false;
            }
        }
    
        setTerrains(currentMap);

        handleIconChange(index, type);
    }

    const handleOnShieldVisibilityChange = (index: number, type: string) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();

        if(!currentMap[i].boss && !currentMap[i].potion && !currentMap[i].sword){        
            currentMap[i].shield = !currentMap[i].shield;
        }

        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].shield == true &&  (i != j) && 
            (!currentMap[i].boss || !currentMap[i].potion || !currentMap[i].sword)) {
                currentMap[j].shield = false;
            }
        }

        setTerrains(currentMap);

        handleIconChange(index, type);
    }

    const handleOnSwordVisibilityChange = (index: number, type: string) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();

        if(!currentMap[i].boss && !currentMap[i].potion && !currentMap[i].shield){        
            currentMap[i].sword = !currentMap[i].sword;
        }

        for (let j = 0; j < currentMap.length; j++) {
            if (currentMap[j].sword == true &&  (i != j) && 
            (!currentMap[i].boss || !currentMap[i].potion || !currentMap[i].shield)) {
                currentMap[j].sword = false;
            }
        }
        
        setTerrains(currentMap);

        handleIconChange(index, type);
    }

    
    const handleIconChange = (index:number, type: string) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();

        if(currentMap[i].iconSrc == ''){
            currentMap[i].iconSrc = getImageSrcFromType(type);
            for (let j = 0; j < currentMap.length; j++) {
                if (currentMap[j].iconSrc == getImageSrcFromType(type) && i != j) {
                    currentMap[j].iconSrc = '';
                }
            }
        }else if(currentMap[i].iconSrc == getImageSrcFromType(type)){
            currentMap[i].iconSrc = '';
        }else if(currentMap[i].iconSrc != '' && currentMap[i].iconSrc != getImageSrcFromType(type)){

        }   

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
        <AnimatePresence exitBeforeEnter initial={false}>
            <img className='displayMainBg' src = './images/file_extensions/mainbg.png' />
            <main className='appMainContainer'>
                <p className='appTittle'>Knights fight</p>
                <main className='appContainer'>
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
                    onTerrainTypeChange = {handleTerrainTypeChange}
                    ></Settings>
                    </BrowserRouter>
                </main>
            </main> 
        </AnimatePresence>
    );
}