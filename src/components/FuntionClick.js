import React from 'react'

function FuntionClick() {

    function clickHandler(){
        console.log("Clicked")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FuntionClick
