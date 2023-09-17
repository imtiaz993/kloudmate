require('dotenv').config();
// path: `.env.${process.env.NODE_ENV}`,

// const contentfulConfig = {
//   spaceId: process.env.CONTENTFUL_SPACE_ID,
//   accessToken:
//     process.env.CONTENTFUL_ACCESS_TOKEN ||
//     process.env.CONTENTFUL_DELIVERY_TOKEN,
// };

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
// if (process.env.CONTENTFUL_HOST) {
//   contentfulConfig.host = process.env.CONTENTFUL_HOST;
//   contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
// }

// const { spaceId, accessToken } = contentfulConfig;

// if (!spaceId || !accessToken) {
//   throw new Error(
//     'Contentful spaceId and the access token need to be provided.'
//   );
// }

module.exports = {
  siteMetadata: {
    title: 'KloudMate - Zero-setup Observability of Your AWS Serverless Stack',
    description:
      'Zero setup observability platform to monitor AWS resources, debug serverless applications, search logs, setup alarms and get insightful metrics. Get started for free!',
    twitterUsername: `@kloudmate`,
    image: `/images/kloudmate-site-preview.jpg`,
    siteUrl: `https://www.kloudmate.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: contentfulConfig,
    // },
    // {
    //   resolve: `gatsby-plugin-web-font-loader`,
    //   options: {
    //     google: {
    //       families: [`Cabin\:300,400,700`],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KloudMate`,
        short_name: `KloudMate`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F47715`,
        display: `standalone`,
        icon: './static/images/nav_new_logo.svg',
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleTagManager: {
    //       trackingId: 'GTM-P5FKHS5',
    //       cookieName: 'gdpr-google-tagmanager',
    //       dataLayerName: 'dataLayer',
    //     },
    //     environments: ['production', 'development'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P5FKHS5',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: 'gatsbyRouteChange',
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 90,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
  ],
};
