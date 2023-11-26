import { Alert } from 'react-bootstrap'

import PropTypes from 'prop-types'

function ExpenseIndicator({ variant, budget, budgetLeft }) {
  return (
    <Alert variant={variant} className="py-2 fw-bold">
      {budget || budgetLeft}
    </Alert>
  )
}

ExpenseIndicator.propTypes = {
  variant: PropTypes.string,
  budget: PropTypes.string,
  budgetLeft: PropTypes.string,
}

export default ExpenseIndicator
