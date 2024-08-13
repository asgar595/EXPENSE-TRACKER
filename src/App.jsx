import React from 'react'
import Heading from './Components/Heading'
import './App.css'
import Balance from './Components/Balance'
import Incomeexpenses from './Components/Incomeexpenses'
import TransactionList from './Components/TransactionList'
import NewTransaction from './Components/NewTransaction'

const App = () => {
  return (
    <div>
      <Heading/>
      <Balance/>
      <Incomeexpenses/>
      <TransactionList/>
      <NewTransaction/>
      
    </div>
  )
}

export default App
