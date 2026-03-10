export default function sitemap() {
  const baseUrl = 'https://ecmobileauto.com';
  const lastModified = new Date('2026-03-09');

  const routes = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/faq', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/reviews', changeFrequency: 'monthly', priority: 0.7 },

    // Services — Core
    { url: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-sacramento', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-brake-service-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/mobile-battery-replacement-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/mobile-ac-service-sacramento', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/coolant-flush-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/tune-up-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/serpentine-belt-sacramento', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/services/pre-purchase-inspection-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/mobile-check-engine-sacramento', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/tire-rotation-sacramento', changeFrequency: 'monthly', priority: 0.7 },

    // Services — Oil Change × City Combos (high transactional intent)
    { url: '/services/mobile-oil-change-elk-grove', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-folsom', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-rancho-cordova', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-roseville', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-citrus-heights', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-carmichael', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-fair-oaks', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-antelope', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/services/mobile-oil-change-north-highlands', changeFrequency: 'monthly', priority: 0.9 },

    // Service Areas — Existing
    { url: '/service-areas/mobile-mechanic-sacramento', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/service-areas/mobile-mechanic-elk-grove', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-folsom', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-rancho-cordova', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-roseville', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-citrus-heights', changeFrequency: 'monthly', priority: 0.7 },

    // Service Areas — New
    { url: '/service-areas/mobile-mechanic-carmichael', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-fair-oaks', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-antelope', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-north-highlands', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/service-areas/mobile-mechanic-orangevale', changeFrequency: 'monthly', priority: 0.8 },

    // Blog — Existing
    { url: '/blog/how-much-does-mobile-mechanic-cost', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/blog/mobile-mechanic-vs-shop', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/blog/30-60-90-car-maintenance-rule', changeFrequency: 'monthly', priority: 0.8 },

    // Blog — New
    { url: '/blog/can-mobile-mechanic-come-to-apartment', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog/sacramento-summer-car-maintenance', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog/signs-brakes-need-replacing', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog/how-long-does-mobile-oil-change-take', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog/mobile-mechanic-elk-grove', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog/what-is-included-in-oil-change', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog/pre-purchase-inspection-sacramento', changeFrequency: 'monthly', priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
