import React from 'react'

function PersonDisplay({details}) {
    return (
        <div>
            <h2>
                I am {details.name}. I am {details.age} years old. I know {details.skill}
            </h2>
        </div>
    )
}

export default PersonDisplay
