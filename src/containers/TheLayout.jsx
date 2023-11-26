import { Col, Row } from 'react-bootstrap'
import BudgetForm from '../components/BudgetForm'
import ExpenseForm from '../components/ExpenseForm'

function TheLayout() {
  return (
    <>
      <Row>
        <Col lg={6} md="auto">
          <BudgetForm />
          <ExpenseForm />
        </Col>
        <Col lg={6} md="auto">
          content secondary
        </Col>
      </Row>
    </>
  )
}

export default TheLayout
