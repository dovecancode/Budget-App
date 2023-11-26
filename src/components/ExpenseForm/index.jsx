import { Button, Form } from 'react-bootstrap'

function ExpenseForm() {
  return (
    <Form>
      <h2>Add your Expenses here...</h2>
      <Form.Group className="my-3">
        <Form.Control type="text" placeholder="Eg. Transportation" />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control type="text" placeholder="Eg. 20" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ExpenseForm
