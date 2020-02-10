export const loadState = initialTheme => {
    const theme = typeof window !== "undefined" && localStorage.getItem("theme")

    if (!theme) {
        return initialTheme
    }

    return JSON.parse(theme)
}

export const saveState = state => {
    localStorage.setItem("theme", JSON.stringify(state))
}
