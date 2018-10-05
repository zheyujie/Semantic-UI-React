import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const ComponentExampleControlsMaximize = ({ examplePath }) => {
  const href = `/maximize/${_.kebabCase(examplePath.split('/').slice(-1))}`

  return (
    <Menu.Item href={href} target='_blank'>
      <Icon color='grey' fitted name='window maximize' size='large' />
      Maximize
    </Menu.Item>
  )
}
ComponentExampleControlsMaximize.propTypes = {
  examplePath: PropTypes.string.isRequired,
}

export default ComponentExampleControlsMaximize
