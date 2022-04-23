import React from 'react';

export interface Person {
    name?: string,
    genre?: string,
    age?: number
}

export const PersonContext = React.createContext<{ person?: Person, setPerson: (person: Person) => void }>({ 
    person: undefined,
    setPerson: () => {}
});