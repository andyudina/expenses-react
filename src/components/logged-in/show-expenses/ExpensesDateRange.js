import React from 'react'

const ExpenseDateRange = ({ dateRange, onChange }) => (
    <div>
      <input 
        type="date"
        name="begin"
        value={dateRange.begin}
        onChange={(e) => onChange(e)}/>
      <span>-</span>
      <input 
        type="date" 
        name="end"
        value={dateRange.end}
        onChange={(e) => onChange(e)}/>    
    </div>
)

export default ExpenseDateRange