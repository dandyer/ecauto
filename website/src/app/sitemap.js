export default function sitemap() {
  const baseUrl = 'https://ecmobileauto.com';
  const lastModified = new Date('2026-03-01');

  const routes = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/faq', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/blog', changeFrequency: 'weekly', priority: 0.8 },

    // Services
    { url: '/services/mobile-oil-change-sacramento', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-brake-service-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/mobile-battery-replacement-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/pre-purchase-inspection-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/mobile-check-engine-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/tire-rotation-sacramento', changeFrequency: 'monthly', priority: 0.7 },

    // Service Areas
    { url: '/service-areas/mobile-mechanic-sacramento', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/service-areas/mobile-mechanic-elk-grove', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-folsom', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-rancho-cordova', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-roseville', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-citrus-heights', changeFrequency: 'monthly', priority: 0.7 },

    // Blog
    { url: '/blog/how-much-does-mobile-mechanic-cost', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/blog/mobile-mechanic-vs-shop', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/blog/30-60-90-car-maintenance-rule', changeFrequency: 'monthly', priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
