import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const ServicePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default ServicePage for front-end
const ServicePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ServicePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ServicePage

export const pageQuery = graphql`
  ## Query for ServicePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ServicePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`