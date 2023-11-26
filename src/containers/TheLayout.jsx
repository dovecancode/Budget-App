import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BudgetForm from '../components/BudgetForm'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseIndicator from '../components/ExpenseIndicator'

function TheLayout() {
  const [totalBudget, setTotalBudget] = useState(0)
  const [expenses, setExpenses] = useState([])

  const totalExpenses = expenses.reduce((acc, val) => acc + val.price, 0)

  const budgetLeftAmount = totalBudget - totalExpenses

  return (
    <>
      <Row>
        <Col lg={6} md="auto">
          {totalBudget ? null : <BudgetForm onSetBudget={setTotalBudget} />}

          <ExpenseForm onSetExpense={setExpenses} />
        </Col>
        <Col lg={6} md="auto">
          <ExpenseIndicator variant="primary" budget={`Budget: ${totalBudget > 0 ? `₱ ${totalBudget}` : '₱ 0'}`} />
          <ExpenseIndicator variant="success" budgetLeft={`Budget Left: ₱ ${budgetLeftAmount === totalBudget ? '0' : budgetLeftAmount}`} />
        </Col>
      </Row>
    </>
  )
}

export default TheLayout
