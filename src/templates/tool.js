import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "twin.macro"

export default function BlogPost(d) {
  const tool = d.data.toolsYaml
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{tool.name} overview</title>
      </Helmet>

      <div>
        <h1>{tool.name}</h1>
      </div>
      <div>{tool.description}</div>
      <a href={tool.url}>{tool.url}</a>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    toolsYaml(fields: { slug: { eq: $slug } }) {
      name
      description
      url
      fields {
        slug
      }
    }
  }
`
