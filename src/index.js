'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // Add a simple health check route
    strapi.server.routes([
      {
        method: 'GET',
        path: '/',
        handler: (ctx) => {
          ctx.body = { status: 'ok', message: 'Strapi is running' };
        },
        config: { auth: false }
      }
    ]);
  },
};
