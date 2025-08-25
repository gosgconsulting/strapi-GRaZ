module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::static',
    config: {
      dirs: [
        {
          path: './frontend/dist',
          route: '/',
          index: 'index.html'
        }
      ]
    }
  }
];
