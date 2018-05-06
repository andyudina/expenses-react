import React from 'react'

const Expense = (
        { 
          name, amount, 
          quantity, onDelete, 
          onChange, errors
        }
    ) => (
    <div>
      {errors.name && <span> {errors.name} </span>}
      <input 
         type="text" 
         name="name" 
         value={name}
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