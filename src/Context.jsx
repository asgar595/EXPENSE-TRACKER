import { createContext,useState } from "react";
export const Context=createContext()
const ContextProvider=(props)=>{
    const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
 { id: 2, text: 'Salary', amount: 300 },
 { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
 ];
 return(<Context.Provider value={{dummyTransactions}}>
    {props.children}

</Context.Provider>)
}
export default ContextProvider