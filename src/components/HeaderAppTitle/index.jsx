import PropTypes from 'prop-types'

function HeaderAppTitle({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

HeaderAppTitle.defaultProps = {
  title: 'Budget APP',
}

HeaderAppTitle.propTypes = {
  title: PropTypes.string,
}

export default HeaderAppTitle
