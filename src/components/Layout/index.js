import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import themes from "../../styles/themes/theme"
import { loadState, saveState } from "../../utils/localStorage"
import GlobalStyles from "../../styles/global"

import Header from "../UI/Navigation/navbar"
import Footer from "../Footer"
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

const Layout = ({ children, notOnePageSection }) => {
    const { light, dark } = themes.title
    const { mediaQueries } = themes

    const [theme, setTheme] = useState(loadState(light))

    const toogleTheme = () => {
        setTheme(theme.title === "light" ? dark : light)
    }

    useEffect(() => {
        saveState(theme)
    }, [theme])

    return (
        <ThemeProvider theme={{ mode: theme, mediaQueries }}>
            <Wrapper>
                <SEO />
                <Header
                    notOnePageSection={notOnePageSection}
                    toogleTheme={toogleTheme}
                    theme={{ mode: theme }}
                />
                <StyledMain>{children}</StyledMain>
                <Footer />
                <GlobalStyles />
            </Wrapper>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
