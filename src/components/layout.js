import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { container, siteTitle } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(
    graphql`
    query{
      site {
        siteMetadata {
          title
        }
      }  
    }`
  )

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title} </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav></nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
