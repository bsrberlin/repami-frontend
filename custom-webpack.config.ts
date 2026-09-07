import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  //@ts-expect-error should be defined
  config.plugins.push(
    new webpack.DefinePlugin({
      $ENV: {
        STRAPI_URL: JSON.stringify(process.env['STRAPI_URL']),
        GA_MEASUREMENT_ID: JSON.stringify(process.env['GA_MEASUREMENT_ID']),
        USERCENTRICS_SETTINGS_ID: JSON.stringify(process.env['USERCENTRICS_SETTINGS_ID']),
        USERCENTRICS_GTM_SERVICE_NAME: JSON.stringify(process.env['USERCENTRICS_GTM_SERVICE_NAME'])
      },
    })
  );

  return config;
};