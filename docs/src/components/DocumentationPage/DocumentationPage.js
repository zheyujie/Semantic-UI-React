import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import DocumentationDataProvider from 'docs/src/components/DocumentationDataProvider'
import DocumentationSidebar from 'docs/src/components/DocumentationSidebar'
import style from 'docs/src/Style'
import DocumentationPageTitle from './DocumentationPageTitle'
import DocumentationPageScroll from './DocumentationPageScroll'

const DocumentationPage = (props) => {
  const { additionalTitle, children, sidebar } = props
  const mainStyle = sidebar ? style.sidebarMain : style.main

  return (
    <Fragment>
      <DocumentationPageScroll />

      <DocumentationDataProvider>
        <DocumentationPageTitle additional={additionalTitle} />
        <DocumentationSidebar style={style.menu} />

        <div style={mainStyle}>{children}</div>
      </DocumentationDataProvider>
    </Fragment>
  )
}

DocumentationPage.propTypes = {
  additionalTitle: PropTypes.string,
  children: PropTypes.node,
  sidebar: PropTypes.bool,
}

export default DocumentationPage
