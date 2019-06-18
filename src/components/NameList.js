import React from 'react'
import Person from './Person'

function NameList() {
    // Method #3
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map((name, index) => <li key={index}>{index} {name}</li>)
    return <ul>{nameList}</ul>

    // Method #2
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 25,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 28,
    //         skill: 'Vue'
    //     }
    // ]
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    // return <ul>{personList}</ul>

    // Method #1
    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>
}

export default NameList
