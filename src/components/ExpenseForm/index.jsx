import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import showMessage from '../../utils/validationMessage'

function ExpenseForm({ onSetExpense, totalBudget }) {
  const [itemName, setItemName] = useState('')
  const [itemAmount, setItemAmount] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newExpenseItem = { id: crypto.randomUUID(), item: itemName, price: +itemAmount }

    let itemNameCapitalize = itemName[0].toUpperCase() + itemName.substring(1, itemName.length)

    if (!totalBudget) return showMessage('Please provide your budget first', 'error')
    if (!itemName && !itemAmount) return showMessage('Please add item and amount', 'error')

    if (!itemName) return showMessage('Forgot to inlude the item name?', 'error')

    if (!itemAmount) return showMessage('Forgot to inlude the item price?', 'error')

    if (isNaN(itemAmount)) return showMessage('Please provide a valid price', 'error')

    onSetExpense((prev) => [...prev, newExpenseItem])

    showMessage(`${itemNameCapitalize} added `)

    setItemName('')
    setItemAmount('')
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <h2>Add your Expenses here...</h2>
      <Form.Group className="my-3">
        <Form.Control
          type="text"
          placeholder="Eg. Transportation"
          name="item"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value)
          }}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control
          type="text"
          placeholder="Eg. 20"
          name="amount"
          value={itemAmount}
          onChange={(e) => {
            setItemAmount(e.target.value)
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ExpenseForm
