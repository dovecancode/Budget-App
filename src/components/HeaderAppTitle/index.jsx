import PropTypes from 'prop-types'

function HeaderAppTitle({ title }) {
  return (
    <header>
      <h1 className="text-center">{title}</h1>
    </header>
  )
}

HeaderAppTitle.defaultProps = {
  title: 'Budget APP',
}

HeaderAppTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeaderAppTitle
