/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://react-blocks.dev", // Change to your actual domain
  generateRobotsTxt: true, // Automatically creates robots.txt
  generateIndexSitemap: false, // Set to true if you have 1000+ pages
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/private/*"], // Pages you don't want in sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

export default config;
