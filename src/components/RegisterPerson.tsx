import React from 'react';
import { PersonContext } from '../contexts/person-context';

const RegisterPerson: React.FC = () => {
    return (
        <>
            <h1>Register Person</h1>
            <PersonContext.Consumer>
                {({person, setPerson}) => (
                    <>
                        <h2>Person Name: {person?.name}</h2>
                        <input type='text' placeholder='Person name' onChange={(event) => setPerson({...person, name: event.target.value})}></input>
                        <h2>Person Age: {person?.age}</h2>
                        <input type='number' placeholder='Person age' onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})}></input>
                        <h2>Person Genre: {person?.genre}</h2>
                        <input type='text' placeholder='Person genre' onChange={(event) => setPerson({...person, genre: event.target.value})}></input>
                    </>
                )} 
            </PersonContext.Consumer>
        </>
    )
}

export default RegisterPerson;