import { Alert } from 'react-bootstrap'

import PropTypes from 'prop-types'

function ExpenseIndicator({ variant, text }) {
  return <Alert variant={variant}>{text}</Alert>
}

ExpenseIndicator.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
}

export default ExpenseIndicator
