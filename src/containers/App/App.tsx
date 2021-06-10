import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Display } from '../../containers/Display/Display';
import { Settings } from '../../containers/Settings/Settings';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css'
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';

const initialMap = [
    {
        index: 0,
        type: 0,
        visibility: true,
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
    const [ globalBossType, setglobalBossType ] = React.useState("characters/skeleton1s");

    const [ globalBossIndex, setGlobalBossIndex ] = React.useState(-1);
    const [ globalPotionIndex, setGlobalPotionIndex ] = React.useState(-1);
    const [ globalShieldIndex, setGlobalShieldIndex ] = React.useState(-1);
    const [ globalSwordIndex, setGlobalSwordIndex ] = React.useState(-1);

    const handleGlobalBossIndex = (index: number) => {
        if(globalBossIndex == -1 || globalBossIndex != index){
            setGlobalBossIndex(index);
        }else if(globalBossIndex == index){
            setGlobalBossIndex(-1);
        }      
    }

    const handleGlobalPotionIndex = (index: number) => {
        if(globalPotionIndex === -1 || globalPotionIndex != index){
            setGlobalPotionIndex(index);
        }else if(globalPotionIndex == index){
            setGlobalPotionIndex(-1);
        }   
    }

    const handleGlobalShieldIndex = (index: number) => {
        if(globalShieldIndex == -1 || globalShieldIndex != index){
            setGlobalShieldIndex(index);
        }else if(globalShieldIndex == index){
            setGlobalShieldIndex(-1);
        }  
    }

    const handleGlobalSwordIndex = (index: number) => {
        if(globalSwordIndex == -1 || globalSwordIndex != index){
            setGlobalSwordIndex(index);
        }else if(globalSwordIndex == index){
            setGlobalSwordIndex(-1);
        }  
    }

    const handleVisibilityChange = (index: number) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === index;
        });
        const currentMap = terrains.slice();
        currentMap[i].visibility = !currentMap[i].visibility;
        setTerrains(currentMap);
    }

    const handleGlobalTerrainTypeChange = (numberType: number) => {
        setglobalTerrainType(numberType);
        const currentMap = terrains.slice();
        for (let i = 0; i < currentMap.length; i++) {
            currentMap[i].type = numberType;
        }
        setTerrains(currentMap);
    }

    const handleGlobalBossTypeChange = (url: string) => {
        setglobalBossType(url);
        const currentMap = terrains.slice();
        if(globalBossIndex != -1){
            currentMap[globalBossIndex].iconSrc = url;
        }
        setTerrains(currentMap);
    }

    const handleOnMatrixChange = () => {
        var temporalTerrain = [];
        var indexTerrain = 0;
    
        for (let i = 0; i < (rows * columns); i++) {
            var currentIconSrc = '';

            if(globalBossIndex == i && globalBossIndex != -1){
                currentIconSrc = globalBossType;
            }
            if(globalPotionIndex == i && globalPotionIndex != -1){
                currentIconSrc = 'potion';
            }
            if(globalShieldIndex == i && globalShieldIndex != -1){
                currentIconSrc = 'shield';
            }
            if(globalSwordIndex == i && globalSwordIndex != -1){
                currentIconSrc = 'sword';
            }

            const newTerrain = {
            index: indexTerrain,
            type: globalTerrainType,
            visibility: true,
            bossType:globalBossType,
            iconSrc: currentIconSrc,
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
                bossType: 'bossdefault',
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
    
    const handleIconChange = (terrainIndex: number, type: string) => {
        const i = terrains.findIndex((terrain) => {
            return terrain.index === terrainIndex;
        });
        const currentMap = terrains.slice();
        if(terrainIndex != -1){
            if(currentMap[i].iconSrc == ''){
                currentMap[i].iconSrc = type;
                for (let j = 0; j < currentMap.length; j++) {
                    if (currentMap[j].iconSrc == type && i != j) {
                        currentMap[j].iconSrc = '';
                    }
                }
            }else if(currentMap[i].iconSrc == type){
                currentMap[i].iconSrc = '';
            }else if(currentMap[i].iconSrc != '' && currentMap[i].iconSrc != type){
    
            }   
        }else{
            for (let k = 0; k < currentMap.length; k++) {
                if (currentMap[k].iconSrc == type) {
                    currentMap[k].iconSrc = '';
                }
            }
        }
        setTerrains(currentMap);
    }

    React.useEffect(() => {
        handleOnMatrixChange();
    }, [ columns, rows ]);

    React.useEffect(() => {
        //handleIconChange(globalBossIndex, globalBossType);
    }, [ globalBossType ]);

    React.useEffect(() => {
        handleIconChange(globalBossIndex, globalBossType);
    }, [ globalBossIndex ]);

    React.useEffect(() => {
        handleIconChange(globalPotionIndex, 'potion');
    }, [ globalPotionIndex ]);

    React.useEffect(() => {
        handleIconChange(globalShieldIndex, 'shield');
    }, [ globalShieldIndex ]);

    React.useEffect(() => {
        handleIconChange(globalSwordIndex, 'sword');
    }, [ globalSwordIndex ]);

    const mainBg = getImageSrcFromType("mainbg");

    return(
        <AnimatePresence exitBeforeEnter initial={true}>
            <img className='displayMainBg' src = {mainBg} />
            <main className='appMainContainer'>
                <p className='appTittle'>Knights fight</p>
                <main className='appContainer'>
                    <HashRouter basename={process.env.PUBLIC_URL}>
                    <Display
                    rows = {rows}
                    columns = {columns}
                    terrains = {terrains}
                    ></Display>
                    <Settings
                    rows = {rows}
                    columns = {columns}
                    globalBossType = {globalBossType}
                    globalBossIndex = {globalBossIndex}
                    globalPotionIndex = {globalPotionIndex}
                    globalShieldIndex = {globalShieldIndex}
                    globalSwordIndex = {globalSwordIndex}
                    terrains = {terrains}
                    onRowsDecrease = {handleRowsDecrease}
                    onRowsIncrease = {handleRowsIncrease}
                    onColumnDecrease = {handleColumnsDecrease}
                    onColumnIncrease = {handleColumnsIncrease}
                    onMatrixChange = {handleOnMatrixChange}
                    onVisibilityChange = {handleVisibilityChange}
                    onTerrainTypeChange = {handleGlobalTerrainTypeChange}
                    onBossTypeChange = {handleGlobalBossTypeChange}
                    onBossIndexChange = {handleGlobalBossIndex}
                    onPotionIndexChange = {handleGlobalPotionIndex}
                    onShieldIndexChange = {handleGlobalShieldIndex}
                    onSwordIndexChange = {handleGlobalSwordIndex}
                    ></Settings>
                    </HashRouter>
                </main>
            </main> 
        </AnimatePresence>
    );
}