import { graphql, Link } from 'gatsby'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { H1, H5, H6 } from '../components/Typography'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="404: Not Found" pathname={location.pathname} />
      <div className="container py-40 mx-auto">
        <H1>404: Not Found</H1>
        <H5 className="mt-10">You just hit a route that doesn't exist...</H5>
        <Link to="/articles/" className="flex flex-row items-center gap-2 mt-6">
          <BiArrowBack className="text-2xl text-indigo-500 fill-current" />
          <H6 className="text-indigo-500"> Bank to Articles</H6>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
