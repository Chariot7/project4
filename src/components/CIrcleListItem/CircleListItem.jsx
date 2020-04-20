import React from 'react';

function CircleListItem({inputData, idx}) {
    return(
        <>
        <div style={{
            height: "10px",
            width: "10px",
            backgroundColor: inputData.current === idx ? `3px solid red` : `3px solid blue`
        }}></div>

        </>
    )
}

export default CircleListItem;