import React from 'react'
import PersonDisplay from './PersonDisplay'

function NameListObjects() {
    const persons = [
        {
            id: 1,
            name: 'Grihit',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Priya',
            age: 20,
            skill: 'Auto CAD' 
        },
        {
            id: 3,
            name: 'Yash',
            age: 19,
            skill: 'Automobile Rendering'
        }
    ]
    const PersonList = persons.map(person => <PersonDisplay key={person.id} details={person} />)
    return (
        <div>
            {PersonList}
        </div>
    )
}

export default NameListObjects
