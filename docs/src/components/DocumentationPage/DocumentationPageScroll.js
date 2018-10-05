import AnchorJS from 'anchor-js'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { withRouter } from 'react-static'

import { scrollToAnchor } from 'docs/src/utils'

const anchors = new AnchorJS({
  icon: '#',
})

class DocumentationPageScroll extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.resetPage()
  }

  componentDidUpdate() {
    this.resetPage()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollStartTimeout)
  }

  resetPage = () => {
    const { location } = this.props
    // only reset the page when changing routes
    if (this.pathname === location.pathname) return

    clearTimeout(this.scrollStartTimeout)

    scrollTo(0, 0)

    anchors.add('h2, h3, h4, h5, h6')
    anchors.remove([1, 2, 3, 4, 5, 6].map(n => `.rendered-example h${n}`).join(', '))
    anchors.remove('.no-anchor')

    this.scrollStartTimeout = setTimeout(scrollToAnchor, 500)
    this.pathname = location.pathname
  }

  render() {
    return null
  }
}

export default withRouter(DocumentationPageScroll)
