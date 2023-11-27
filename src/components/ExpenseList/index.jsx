import PropTypes from 'prop-types'
import ExpenseItem from '../ExpenseItem'
import './styles.css'
function ExpensList({ expenses }) {
  const isExpenses = expenses.length === 0

  return (
    <>
      <div>
        <p className="h3">List</p>
        <hr />
      </div>
      <div className="tHeader py-2 px-2">
        <div className="theaderItem d-flex">
          <div>Item</div>
          <div>Price</div>
        </div>
      </div>

      {isExpenses ? (
        <div className="noContent">
          <p className="lead">No expenses yet please add</p>
        </div>
      ) : (
        expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)
      )}
    </>
  )
}

ExpensList.propTypes = {
  expenses: PropTypes.array,
}

export default ExpensList
