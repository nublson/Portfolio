import React from 'react'

import NavItems from './navItems/navItems'
import DarkModeToggle from '../ThemeSwitcher'

const DesktopMenu = ({ notOnePageSection, toogleTheme, theme }) => {
    return notOnePageSection ? null : (
        <>
            <NavItems />
            <DarkModeToggle toogleTheme={toogleTheme} theme={theme} />
        </>
    )
}

export default DesktopMenu
