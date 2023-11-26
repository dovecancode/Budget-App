import { Button, Form } from 'react-bootstrap'
function BudgetForm() {
  return (
    <Form className="mb-3">
      <h2>Enter your budget for this month:</h2>
      <Form.Group className="my-3">
        <Form.Control type="text" placeholder="Eg. 1000" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default BudgetForm
