import React from "react"

import Layout from "../components/Layout"

import Home from "../sections/Home"
import About from "../sections/About"
import Portfolio from "../sections/Portfolio"
import Contact from "../sections/Contact"

export default () => (
    <Layout>
        <Home />
        <About />
        <Portfolio />
        <Contact />
    </Layout>
)
