import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import theme from "../../styles/themes/theme"
import GlobalStyles from "../../styles/global"

import SEO from "../utils/seo"

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme.dark}>
            <SEO />
            <StyledMain>{children}</StyledMain>
            <GlobalStyles />
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
