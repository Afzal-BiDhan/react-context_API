import React, { createContext } from 'react'
import DemoA from './components/DemoA';

const FirstName = createContext();
const LastName = createContext();


function App() {
  return (
    <FirstName.Provider value={"Afzal"}>
      <LastName.Provider value={"Bidhan"} >
        <DemoA />
      </LastName.Provider>
    </FirstName.Provider>
  );
}

export default App;
export { FirstName, LastName };