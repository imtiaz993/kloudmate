import React from 'react';
import { useSiteMetadata } from '../../hooks/useSiteSettings';

const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" property="og:image" content={seo.image} />
      <meta name="title" property="og:title" content={seo.title} />
      <meta
        name="description"
        property="og:description"
        content={seo.description}
      />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta property="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="/images/nav_new_logo.svg" />
      {children}
    </>
  );
};

export default SEO;
