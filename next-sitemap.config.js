/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://growthwayz.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public', // Ensure sitemap is generated in public folder
};
