import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify'

function BudgetForm({ onSetBudget }) {
  const [budget, setBudget] = useState('')

  const input = useRef(null)

  const showMessage = (msg, status) => {
    if (status === 'error') {
      toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'colored',
        autoClose: 1500,
      })
    } else {
      toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'colored',
        autoClose: 1500,
      })
    }
  }

  useEffect(() => {
    input.current.focus()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!budget || isNaN(budget)) {
      showMessage('Please enter a budget to procced', 'error')
      return
    } else {
      onSetBudget(+budget)
      showMessage('Budget submitted')
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
      <ToastContainer />
    </Form>
  )
}

BudgetForm.propTypes = {
  onSetBudget: PropTypes.func,
}

export default BudgetForm
