/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://techincglobal.com",
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `${process.env.SITE_URL || "https://techincglobal.com"}/sitemap.xml`,
        ],
    },
    exclude: ["/api/*", "/admin/*"],
};
