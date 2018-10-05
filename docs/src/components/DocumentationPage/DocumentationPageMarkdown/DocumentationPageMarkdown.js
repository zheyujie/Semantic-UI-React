import PropTypes from 'prop-types'
import React from 'react'
import { withRouteData, withSiteData } from 'react-static'
import { Container } from 'semantic-ui-react'

import DocumentationPage from 'docs/src/components/DocumentationPage'
import { compose } from 'docs/src/hoc'
import * as components from './components'

const DocumentationPageMarkdown = ({ pageName, ...rest }) => {
  const { default: MarkdownComponent, meta } = require(`docs/src/pages/${pageName}`)

  return (
    <DocumentationPage additionalTitle={meta.title} sidebar>
      <Container style={{ padding: 15 }}>
        <MarkdownComponent {...rest} components={components} />
      </Container>
    </DocumentationPage>
  )
}

DocumentationPageMarkdown.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default compose(
  withRouteData,
  withSiteData,
)(DocumentationPageMarkdown)
