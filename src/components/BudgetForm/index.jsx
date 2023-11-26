import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
function BudgetForm({ onSetBudget }) {
  const [budget, setBudget] = useState('')

  const input = useRef(null)

  useEffect(() => {
    input.current.focus()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!budget || isNaN(budget)) {
      alert('Please enter a budget and a valid one')
      return
    } else {
      onSetBudget(+budget)
      // alert('Budget submitted')
    }

    setBudget('')
  }
  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <h2>Enter your budget for this month:</h2>
      <Form.Group className="my-3">
        <Form.Control
          value={budget}
          type="text"
          placeholder="Eg. 1000"
          ref={input}
          onChange={(e) => {
            setBudget(e.target.value)
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

BudgetForm.propTypes = {
  onSetBudget: PropTypes.func,
}

export default BudgetForm
