import PropTypes from 'prop-types'
import React from 'react'
import { Head } from 'react-static'

import { withData } from 'docs/src/components/DocumentationDataProvider'

const DocumentationPageTitle = ({ additional, title }) => (
  <Head>
    <title>
      {additional ? `${additional} - ` : ''}
      {title}
    </title>
  </Head>
)

DocumentationPageTitle.propTypes = {
  additional: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default withData(DocumentationPageTitle)
