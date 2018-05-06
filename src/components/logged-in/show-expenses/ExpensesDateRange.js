import React from 'react'

const ExpenseDateRange = ({ dateRange, onChange, onBlur }) => (
    <div>
      <input 
        type="date"
        name="begin"
        value={dateRange.begin}
        onChange={(e) => onChange(e)}
        onBlur={(e) => {
          onBlur(e)}}/>
      <span>-</span>
      <input 
        type="date" 
        name="end"
        value={dateRange.end}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur(e)}/>    
    </div>
)

export default ExpenseDateRange