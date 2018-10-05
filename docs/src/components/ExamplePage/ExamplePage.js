import PropTypes from 'prop-types'
import { createElement } from 'react'
import { withRouteData } from 'react-static'

const ExamplePage = (props) => {
  const exampleComponent = require(`docs/src/examples/${props.path}`).default

  return createElement(exampleComponent)
}

ExamplePage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default withRouteData(ExamplePage)
