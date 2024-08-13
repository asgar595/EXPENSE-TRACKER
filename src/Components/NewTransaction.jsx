import React from 'react'
import { useState } from 'react'

const NewTransaction = () => {
    const [text,setText]=useState("")
    const [value,setvalue]=useState(0)

  return (
    <div>
        <>
        <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." value={value} onChange={(e)=>setvalue(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
      
    </div>
  )
}

export default NewTransaction
