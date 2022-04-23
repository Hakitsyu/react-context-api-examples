import React, { useState } from 'react';
import RegisterPerson from './components/RegisterPerson';
import { Person, PersonContext } from './contexts/person-context';

const App: React.FC = () => {
  const [person, setPerson] = useState<Person | undefined>(undefined);

  return (
    <PersonContext.Provider value={{person, setPerson}}>
      <RegisterPerson />
    </PersonContext.Provider>
  )
}

export default App;