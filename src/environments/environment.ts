// $ENV.STRAPI_URL kommt aus dem build environment
// PRODUCTIONCONFIG
declare var $ENV: Env;

interface Env {
  STRAPI_URL: string,
  GA_MEASUREMENT_ID: string,
  USERCENTRICS_SETTINGS_ID: string
}

export const environment = {
  production: true,
  strapiUrl: $ENV.STRAPI_URL,
  gaMeasurementId: $ENV.GA_MEASUREMENT_ID,
  usercentricsSettingsId: $ENV.USERCENTRICS_SETTINGS_ID
};