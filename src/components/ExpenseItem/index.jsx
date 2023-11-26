import PropTypes from 'prop-types'

function ExpenseItem({ expense }) {
  console.log(expense)
  return (
    <tr>
      <td>Pork</td>
      <td>300</td>
    </tr>
  )
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
}

export default ExpenseItem
