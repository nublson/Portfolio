const path = require("path")

module.exports = {
    siteMetadata: {
        title: `Nubelson | Full-Stack Developer`,
        description: `I’m Nubelson, a 22 years old self-taught Ful-Stack developer, from Angola, living in Portugal.`,
        author: `Nubelson`,
        siteUrl: "https://nubelson.dev",
        social: {
            twitter: "nubelsondev",
            instagram: "nubelsondev",
            linkedin: "nubelsondev",
            github: "nubelsondev",
            email: "hello@nubelson.dev",
        },
        // name of the image for social website share, should be in static folder
        imageShare: `share.svg`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: path.resolve(__dirname, "src", "content"),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Lato`,
                        variants: [`300`, `400`, `400i`, `700`, `700i`],
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // Plugins configs
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "noreferrer",
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nubelson | Full-Stack Developer`,
                short_name: `Nubelson`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#F9D342`,
                display: `minimal-ui`,
                icon: `src/images/icon.svg`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
    ],
}
