import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { container, siteTitle } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const title = `${pageTitle} | ${data.site.siteMetadata.title}`

  return (
    <div className={container}>
      <title>{title}</title>
      <header className={siteTitle}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </header>
      <nav></nav>
      <body>{children}</body>
    </div>
  )
}

export default Layout
