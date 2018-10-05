import PropTypes from 'prop-types'
import React, { createContext } from 'react'
import { withRouteData, withSiteData } from 'react-static'

import { compose } from 'docs/src/hoc'

const DataContext = createContext({})

const DocumentationDataProvider = ({ children, ...rest }) => (
  <DataContext.Provider value={rest}>{children}</DataContext.Provider>
)

DocumentationDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const DocumentationDataConsumer = DataContext.Consumer

export const withData = Component => props => (
  <DataContext.Consumer>{data => <Component {...data} {...props} />}</DataContext.Consumer>
)

export default compose(
  withSiteData,
  withRouteData,
)(DocumentationDataProvider)
