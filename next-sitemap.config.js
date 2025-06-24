/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.vitrectomyrentals.ca", // Ensure your canonical domain is correct
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*", "/404", "/500"], // Exclude sensitive paths
      },
    ],
  },
  transform: async (config, path) => {
    // Customize priority and changefreq dynamically
    let priority = 0.7;
    let changefreq = "weekly";

    // Adjust for important pages
    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/contact-us" || path === "/faq") {
      priority = 0.8;
    }

    return {
      loc: path, // Page URL
      changefreq,
      priority,
      lastmod: new Date().toISOString(), // Automatically set the last modification date
      alternateRefs: [], // If you have alternate language versions, add them here
    };
  },
  exclude: [
    "/api/*", // Exclude API routes
    "/admin/*", // Exclude admin routes
    "/404", // Exclude error pages
    "/500",
    "/sitemap.xml", // Avoid circular references
    "/_*", // Avoid server files or special routes
  ],
  sitemapSize: 5000, // Max number of URLs per sitemap file
};
