import * as React from "react"
import { Link } from 'gatsby'
import { container, heading } from './layout.module.css'

const Layout = ({pageTitle, children}) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout