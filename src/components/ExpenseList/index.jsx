import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
function ExpensList({ expenses }) {
  const isExpenses = expenses.length === 0

  return (
    <div>
      <p className="h3">List</p>
      <hr />

      <Table>
        <thead className="table-dark">
          <tr>
            <th scope="col">Expence Items</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>Helo</tr>
        </tbody>
      </Table>
    </div>
  )
}

ExpensList.propTypes = {
  expenses: PropTypes.array,
}

export default ExpensList
