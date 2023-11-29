import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Адвент-календарь от Secret Kitchen",
		keywords: "Розыгрыш, подарки, календарь",
		description: "Не упусти предновогодний розыгрыш! Новые подарки ждут тебя каждый день!",
		siteUrl: "https://promo.secret-kitchen.ru",
		image: "src/images/favicon/favicon.png",
	},
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-react-svg",
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				"icon": "src/images/favicon/favicon.png"
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		},
		{
			resolve: "gatsby-omni-font-loader",
			options: {
				mode: "async",
				enableListener: true,
				custom: [
					{
						name: ["FUD Grotesk", "Source Sans Pro"],
						file: "/fonts/fonts.css",
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: 'https://promo.secret-kitchen.ru',
				sitemap: 'https://promo.secret-kitchen.ru/sitemap-index.xml',
				env: {
					development: {
						policy: [{ userAgent: '*', disallow: ['/'] }]
					},
					production: {
						policy: [{ userAgent: '*', disallow: ['/'] }]
					},
					// production: {
					// 	policy: [{ userAgent: '*', allow: '/' }]
					// }
				}
			}
		},
	]
};

export default config;
