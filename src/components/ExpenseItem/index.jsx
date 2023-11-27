import PropTypes from 'prop-types'

function ExpenseItem({ expense }) {
  const { item, price } = expense
  return (
    <div className="tRow d-flex py-2 px-1">
      <div>{item}</div>
      <div>{price}</div>
    </div>
  )
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
}

export default ExpenseItem
