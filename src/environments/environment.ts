// $ENV.STRAPI_URL kommt aus dem build environment
// PRODUCTIONCONFIG
declare var $ENV: Env;

interface Env {
  STRAPI_URL: string,
  MATOMO_SITE_ID: string
}

export const environment = {
  production: true,
  strapiUrl: $ENV.STRAPI_URL,
  matomoSiteId: $ENV.MATOMO_SITE_ID
};