import React from "React"
import Header from "./Header"

import 'bulma/css/bulma.css'
import "../css/layout.css"


const Layout = ( {children} ) => {
  return (
    <>
      <Header />
      <main className="container">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
export default Layout