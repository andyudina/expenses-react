import React from 'react'

const Expense = (
        { 
          item, amount, 
          quantity, onDelete, 
          onChange, errors
        }
    ) => (
    <div>
      {errors.item && <span> {errors.item} </span>}
      <input 
         type="text" 
         name="item" 
         value={item}
         onChange={(e) => onChange(e)}/>
      {errors.amount && <span> {errors.amount} </span>}
      <input 
         type="number" 
         name="amount" 
         value={amount}
         onChange={(e) => onChange(e)}/>
      {errors.quantity && <span> {errors.quantity} </span>}
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