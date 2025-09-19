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
        MATOMO_SITE_ID: JSON.stringify(process.env['MATOMO_SITE_ID'])
      },
    })
  );

  return config;
};