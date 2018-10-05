import faker from 'faker'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import * as SUIR from 'semantic-ui-react'

import * as selectCommon from 'docs/src/examples/addons/Select/common'
import Wireframe from 'docs/src/examples/behaviors/Visibility/Wireframe'
import * as dropdownCommon from 'docs/src/examples/modules/Dropdown/common'

const externals = {
  faker,
  lodash: require('lodash'),
  react: React,
  'prop-types': PropTypes,
  'semantic-ui-react': SUIR,
}
const commons = {
  Dropdown: dropdownCommon,
  Select: selectCommon,
}

const resolver = (importPath, { displayName }) => {
  if (externals[importPath]) return externals[importPath]
  if (commons[displayName] && _.endsWith(importPath, '/common')) return commons[displayName]
  if (_.endsWith(importPath, '/Wireframe')) return Wireframe

  throw new Error(
    [
      'An error in resolver(), please check that import is defined, details:',
      JSON.stringify({ displayName, importPath }),
    ].join('\n'),
  )
}

export default resolver
