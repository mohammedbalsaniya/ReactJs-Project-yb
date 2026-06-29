import { useState , useEffect, useRef } from 'react'

function ExpenseForm({ onAddExpense }) {

  const [title, setTitle] = useState("")
  const [amount, setAmount ] = useState("")
  const titleRef = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!title || !amount) return alert("Please fill all fields")

      const newExpense = {
        id:Date.now(),
        title, 
        amount: parseFloat(amount)
      }
      onAddExpense(newExpense)
      setTitle("")
      setAmount("")
      titleRef.current.focus();
  }

  return (
   		<form className="expense-form" onSubmit={handleSubmit} >
			<input placeholder="Expense Title" type="text" ref={titleRef}
       value={title} onChange={(e) => setTitle(e.target.value)} />
			<input placeholder="Amount ₹" type="number" 
      value={amount} onChange={(e) => setAmount(e.target.value)} />
			<button type="submit">Add Expense</button>
		</form>
  )
}

export default ExpenseForm