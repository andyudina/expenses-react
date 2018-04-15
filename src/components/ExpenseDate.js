import React from 'react'

const ExpenseDate = ({ date, onChange }) => (
    <div>
      <input 
        type="date" 
        onChange={onChange}
        value={date}/>
    </div>
)

export default ExpenseDate