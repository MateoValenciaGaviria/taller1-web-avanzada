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

    const imageSrc = getImageSrcFromType(`${mapType}`);

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
                            <img className='arrowBtnBg' src = "./images/file_extensions/leftarrow.png"/>
                        </motion.button>
                        <input type="text" className='mapInput' value={rows} onChange={onMatrixChange}/>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={onRowsIncrease} className='arrowBtn'>
                            <img className='arrowBtnBg' src = "./images/file_extensions/rightarrow.png"/>
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
                            <img className='arrowBtnBg' src = "./images/file_extensions/leftarrow.png"/>
                        </motion.button>
                        <input type="text" className='mapInput'value={columns}/>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} 
                        onClick={onColumnIncrease} className='arrowBtn'>
                            <img className='arrowBtnBg' src = "./images/file_extensions/rightarrow.png"/>
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
                    <img className='mapBtnBg' src = "./images/file_extensions/terrain/greenterrain.png"/>
                </motion.button>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  
                onClick={handleClick1}
                className='mapStyleBtn'>
                    <img className='mapBtnBg' src = "./images/file_extensions/terrain/blueterrain.png"/>
                </motion.button>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  
                onClick={handleClick2}
                className='mapStyleBtn'>
                    <img className='mapBtnBg' src = "./images/file_extensions/terrain/redterrain.png"/>
                </motion.button>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}  
                onClick={handleClick3}
                className='mapStyleBtn'>
                    <img className='mapBtnBg' src = "./images/file_extensions/terrain/pinkterrain.png"/>
                </motion.button>
            </div>
        </div>
    );
}