import React from 'react'

const ExpenseDate = ({ date, onChange, error }) => (
    <div>
      {error && <span> {error} </span>}
      <input 
        type="date" 
        onChange={onChange}
        value={date}/>
    </div>
)

export default ExpenseDate