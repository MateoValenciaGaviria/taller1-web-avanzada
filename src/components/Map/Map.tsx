import React from 'react'
import { motion } from 'framer-motion';
import { getImageSrcFromType } from '../../utils/getImageSrcFromType';
import { Matrix } from '../Matrix/Matrix';
import './Map.css';

interface MapProps {
    mapType: string,
    rows: number,
    columns: number,
    onRowsDecrease: () => void;
    onRowsIncrease: () => void;
    onColumnDecrease: () => void;
    onColumnIncrease: () => void;
    onMatrixChange: () => void;
    onVisibilityChange: (index: number) => void;
    onTerrainTypeChange: (terrainType: number) => void;
}

export const Map: React.FC<MapProps> = ( { mapType, rows, columns,  onRowsDecrease, onRowsIncrease, onColumnDecrease, onColumnIncrease, onMatrixChange, onVisibilityChange, onTerrainTypeChange } ) => {

    const leftarrowImgSrc = getImageSrcFromType("leftarrow");
    const rightarrowImgSrc = getImageSrcFromType("rightarrow");

    const greenTerrainImgSrc = getImageSrcFromType("terrain/greenterrain");
    const blueTerrainImgSrc = getImageSrcFromType("terrain/blueterrain");
    const redTerrainImgSrc = getImageSrcFromType("terrain/redterrain");
    const pinkTerrainImgSrc = getImageSrcFromType("terrain/pinkterrain");

    const handleClick0 = () => {
        onTerrainTypeChange(0);
    } 

    const handleClick1 = () => {
        onTerrainTypeChange(1);
    } 

    const handleClick2 = () => {
        onTerrainTypeChange(2);
    } 

    const handleClick3 = () => {
        onTerrainTypeChange(3);
    } 

    return(
        <div className='mainMapContainer'>
            <div className='rowsColumnsNumberContainer'>
                <div className='numbersContainer'>
                    <div>Filas</div>
                    <div className='numbersControl'>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={onRowsDecrease} className='arrowBtn'>
                            <img className='arrowBtnBg' src = {leftarrowImgSrc}/>
                        </motion.button>
                        <input type="text" className='mapInput' value={rows} onChange={onMatrixChange}/>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={onRowsIncrease} className='arrowBtn'>
                            <img className='arrowBtnBg' src = {rightarrowImgSrc}/>
                        </motion.button>
                    </div>
                </div>
                <div className='numbersContainer'>
                    <div>Columnas</div>
                    <div className='numbersControl'>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={onColumnDecrease} className='arrowBtn'>
                            <img className='arrowBtnBg' src = {leftarrowImgSrc}/>
                        </motion.button>
                        <input type="text" className='mapInput'value={columns}/>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={onColumnIncrease} className='arrowBtn'>
                            <img className='arrowBtnBg' src = {rightarrowImgSrc}/>
                        </motion.button>
                    </div>
                </div>
            </div>
            <div>
                <p>Cambiar visibilidad del terreno</p>
                <Matrix 
                rows = {rows}
                columns = {columns}
                onMatrixClick = {onVisibilityChange}
                type = ''
                ></Matrix>
            </div>
            <div className='terrainStylesContainer'>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  
                onClick={handleClick0}
                className='mapStyleBtn'>
                    <img className='mapBtnBg' src = {greenTerrainImgSrc}/>
                </motion.button>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  
                onClick={handleClick1}
                className='mapStyleBtn'>
                    <img className='mapBtnBg' src = {blueTerrainImgSrc}/>
                </motion.button>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  
                onClick={handleClick2}
                className='mapStyleBtn'>
                    <img className='mapBtnBg' src = {redTerrainImgSrc}/>
                </motion.button>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  
                onClick={handleClick3}
                className='mapStyleBtn'>
                    <img className='mapBtnBg' src = {pinkTerrainImgSrc}/>
                </motion.button>
            </div>
        </div>
    );
}