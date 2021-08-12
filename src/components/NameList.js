import React from 'react'

function NameList() {
    const names = ['Grihit','Priya','Yash']
    //const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {
                names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
            }
        </div>
        //<div>{namesList}</div>
    )
}

export default NameList
