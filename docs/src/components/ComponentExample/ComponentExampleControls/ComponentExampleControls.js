import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import ComponentExampleControlsCopy from './ComponentExampleControlsCopy'
import ComponentExampleControlsEdit from './ComponentExampleControlsEdit'
import ComponentExampleControlsMaximize from './ComponentExampleControlsMaximize'
import ComponentExampleControlsHtml from './ComponentExampleControlsHtml'

const ComponentExampleControls = (props) => {
  const { anchorName, examplePath, showHTML, showCode, onCopyLink, onShowHTML, onShowCode } = props

  return (
    <Menu color='green' compact icon='labeled' size='tiny' text>
      <ComponentExampleControlsEdit active={showCode} onClick={onShowCode} />
      <ComponentExampleControlsHtml active={showHTML} onClick={onShowHTML} />
      <ComponentExampleControlsMaximize examplePath={examplePath} />
      <ComponentExampleControlsCopy anchorName={anchorName} onClick={onCopyLink} />
    </Menu>
  )
}

ComponentExampleControls.propTypes = {
  examplePath: PropTypes.string,
  anchorName: PropTypes.string,
  onCopyLink: PropTypes.func,
  onShowCode: PropTypes.func,
  onShowHTML: PropTypes.func,
  showCode: PropTypes.bool,
  showHTML: PropTypes.bool,
}

export default updateForKeys(['showCode', 'showHTML'])(ComponentExampleControls)
