import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="All posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <Link to={`${node.slug}`}>{node.frontmatter.title}</Link>
          <p>{node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
