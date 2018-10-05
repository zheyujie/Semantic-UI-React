import PropTypes from 'prop-types'
import React from 'react'
import SourceRender from 'react-source-render'

import { updateForKeys } from 'docs/src/hoc'
import resolver from './resolver'

const babelConfig = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 4 versions', 'not dead'],
        },
      },
    ],
    ['stage-1', { decoratorsLegacy: true }],
  ],
}

const CodePreview = ({ displayName, onError, onSuccess, sourceCode }) => (
  <SourceRender
    babelConfig={babelConfig}
    displayName={displayName}
    onError={onError}
    onSuccess={onSuccess}
    resolver={resolver}
    source={sourceCode}
  />
)

CodePreview.propTypes = {
  displayName: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  sourceCode: PropTypes.string.isRequired,
}

export default updateForKeys(['sourceCode'])(CodePreview)
