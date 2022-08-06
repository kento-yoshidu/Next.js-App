import React from "react"
import type { ReactNode } from "react"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />

    <main style={{ margin: "100px" }}>
      { children }
    </main>

    <Footer />
  </>
)

export default Layout
