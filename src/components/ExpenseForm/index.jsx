import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function ExpenseForm({ onSetExpense }) {
  const [itemName, setItemName] = useState('')
  const [itemAmount, setItemAmount] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newExpenseItem = { id: crypto.randomUUID(), item: itemName, price: +itemAmount }

    onSetExpense((prev) => [...prev, newExpenseItem])

    setItemName('')
    setItemAmount('')
  }

  return (
    <Form onSubmit={handleSubmit}>
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
            setItemAmount(+e.target.value)
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
