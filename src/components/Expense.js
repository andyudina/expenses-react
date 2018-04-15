import React from 'react'

const Expense = (
        { 
          item, amount, 
          quantity, onDelete, 
          onChange
        }
    ) => (
    <div>
      <input 
         type="text" 
         name="item" 
         value={item}
         onChange={(e) => onChange(e)}/>
      <input 
         type="number" 
         name="amount" 
         value={amount}
         onChange={(e) => onChange(e)}/>
      <input 
         type="number" 
         name="quantity" 
         value={quantity}
         onChange={(e) => onChange(e)}/>
      <button onClick={onDelete}>
        Delete
      </button>
    </div>
)

export default Expense