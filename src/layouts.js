import React from 'react'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
/* custom layouts */
import Page from './layouts/Page'
import PageLoading from './layouts/PageLoading'
import Post from './layouts/Post'
import Doc from './layouts/Doc'
/* custom pages */
import Jobs from './pages/Jobs'
import Blog from './pages/Blog'
import PageError from './pages/404'
import Homepage from './pages/Homepage'
import Community from './pages/Community'

export default class Layouts extends React.Component {
  render () {
    return (
      <PhenomicPageContainer
        {...this.props}
        layouts={{
          Page,
          PageError,
          PageLoading,
          Homepage,
          Community,
          Post,
          Jobs,
          Blog,
          Doc
        }}
      />
    )
  }
}
