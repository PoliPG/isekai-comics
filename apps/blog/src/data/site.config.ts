interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Isekai Comics', // Site author
	title: 'Isekai Comics Blog', // Site title.
	description: 'En isekai comics podrás estar al tanto de toda la actualidad en del mundo freak.', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es_ES',
	shareMessage: 'Comparte el post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
