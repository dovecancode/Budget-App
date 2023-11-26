import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BudgetForm from '../components/BudgetForm'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseIndicator from '../components/ExpenseIndicator'

function TheLayout() {
  const [totalBudget, setTotalBudget] = useState('')

  return (
    <>
      <Row>
        <Col lg={6} md="auto">
          {totalBudget ? null : <BudgetForm onSetBudget={setTotalBudget} />}

          <ExpenseForm />
        </Col>
        <Col lg={6} md="auto">
          <ExpenseIndicator variant="primary" text={`Budget: ${totalBudget > 0 ? '₱ ' : '₱ 0'} ${totalBudget}`} />
          <ExpenseIndicator variant="success" text={`Budget Left: ${expense > 0 ? '₱ ' : '₱ 0'} ${expense}`} />
        </Col>
      </Row>
    </>
  )
}

export default TheLayout
