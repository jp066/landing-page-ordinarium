import { APP_URL } from '$lib/constants';

export const prerender = true;

export async function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${APP_URL}/</loc>
		<changefreq>daily</changefreq>
		<priority>1.0</priority>
	</url>
	<url>
		<loc>${APP_URL}/api</loc>
		<changefreq>weekly</changefreq>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>${APP_URL}/roadmap</loc>
		<changefreq>daily</changefreq>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>${APP_URL}/parceria/arquidiocese-de-teresina</loc>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>
	<url>
		<loc>${APP_URL}/privacidade</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>
	<url>
		<loc>${APP_URL}/termos</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>
	<url>
		<loc>${APP_URL}/faq</loc>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
