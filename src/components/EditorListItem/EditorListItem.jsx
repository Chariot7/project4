import React from 'react';
import './EditorListItem.css'

function EditorListItem({inputData, handleChange, switchRotate, idx}) {
    console.log(inputData.switchRotate, 'this is switch')
    return (
        <>
        <ul>
        <li>
        <div style={{
            height: `${inputData.height}px`,
            width: `${inputData.width}pt`,
            transform: inputData.switchRotate && idx%2 ? `rotate(-${inputData.rotate}deg)`: `rotate(${inputData.rotate}deg)`,
            // height: 100,
            border: `${inputData.border}px solid rgb(${inputData.colorRed},${inputData.colorGreen},${inputData.colorBlue})`,
            left: `${inputData.height}px`,
            top: `150px`
        }} >
            <h1 style={{
                fontSize: `${inputData.fontSize}px`,
                transform: `rotate(${inputData.textRotate}deg)`,
                color: `rgb(${inputData.colorRed},${inputData.colorGreen},${inputData.colorBlue})`,
                
                
            }}>{inputData.text}
            </h1>
            </div>
            </li>
            </ul>
      </>
    )
}

export default EditorListItem