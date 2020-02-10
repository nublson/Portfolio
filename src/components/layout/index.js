import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import themes from "../../styles/themes/theme"
import GlobalStyles from "../../styles/global"

import SEO from "../utils/seo"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background: var(--background);
    color: var(--text);
    transition: color 0.2s ease-out, background 0.2s ease-out;
`

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Layout = ({ children }) => {
    const { light } = themes.title
    const { mediaQueries } = themes

    return (
        <ThemeProvider theme={{ title: light, mediaQueries }}>
            <Wrapper>
                <SEO />
                <StyledMain>{children}</StyledMain>
                <GlobalStyles />
            </Wrapper>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
