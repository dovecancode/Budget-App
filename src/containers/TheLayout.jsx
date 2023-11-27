import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BudgetForm from '../components/BudgetForm'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseIndicator from '../components/ExpenseIndicator'
import ExpensList from '../components/ExpenseList'

function TheLayout() {
  const [totalBudget, setTotalBudget] = useState(null)
  const [expenses, setExpenses] = useState([])

  const totalExpenses = expenses.reduce((acc, val) => acc + val.price, 0)

  const budgetLeftAmount = totalBudget - totalExpenses

  const percentage = totalExpenses > 0 ? (totalExpenses / totalBudget) * 100 : null

  let stat
  // if percentage get to90 to 100 percent your budget is out
  if (percentage >= 90) {
    stat = 'danger'
    // if percentage get 50 to 90 percent close to burn
  } else if (percentage >= 50) {
    stat = 'warning'
  } else {
    // if your budget is in full
    stat = 'success'
  }

  const budgetStatus = {
    success: 'success',
    warning: 'warning',
    danger: 'danger',
  }[stat]

  return (
    <>
      <Row>
        <Col lg={6} className="pe-4">
          {totalBudget ? null : <BudgetForm onSetBudget={setTotalBudget} />}

          {/* <BudgetForm onSetBudget={setTotalBudget} /> */}

          <ExpenseForm onSetExpense={setExpenses} />
        </Col>
        <Col lg={6} className="ps-4">
          <ExpenseIndicator variant="primary" budget={`Budget: ${totalBudget > 0 ? `₱ ${totalBudget}` : '₱ 0'}`} />
          <ExpenseIndicator variant={budgetStatus} budgetLeft={`Budget Left: ₱ ${budgetLeftAmount === totalBudget ? 0 : budgetLeftAmount}`} />
          <ExpensList expenses={expenses} />
        </Col>
      </Row>
    </>
  )
}

export default TheLayout
