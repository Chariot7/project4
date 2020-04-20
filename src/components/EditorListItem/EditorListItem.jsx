import React from 'react';
import './EditorListItem.css'

function EditorListItem({inputData, handleChange, switchRotate, idx}) {
    console.log(inputData.switchRotate, 'this is switch')
    return (
        <>
        <ul style={{
            padding: `${inputData.spacing}px`
        }}>
        <li style={{
            padding: `${inputData.spacing}px`
        }}>
        <div style={{
            height:`${inputData.height}px`,
            width: `${inputData.width}pt`,
            transform: inputData.switchRotate && idx%2 ? `rotate(-${inputData.rotate}deg)`: `rotate(${inputData.rotate}deg)`,
            border: inputData.secondColorSel && idx%2 ? `${inputData.border}px solid rgb(${inputData.secondRed},${inputData.secondGreen},${inputData.secondBlue})` : `${inputData.border}px solid rgb(${inputData.colorRed},${inputData.colorGreen},${inputData.colorBlue})`,
            left: `${inputData.height}px`,
            top: `150px`
        }} >
            <h1 style={{
                fontSize: `${inputData.fontSize}px`,
                transform: `rotate(${inputData.textRotate}deg)`,
                color: inputData.secondColorSel && idx%2 ? `rgb(${inputData.colorRed},${inputData.colorGreen},${inputData.colorBlue})` : `rgb(${inputData.secondRed},${inputData.secondGreen},${inputData.secondBlue})`,
                
                
            }}>{inputData.text}
            </h1>
            </div>
            </li>
            </ul>
      </>
    )
}

export default EditorListItem