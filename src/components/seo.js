import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Ts from '../images/ts.png';

// { title, meta }
const Seo = ({ image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            portfolioImage
          }
        }
      }
    `
  );

  const sitePath = 'https://takahiro-saeki.tech';

  return (
    <Helmet>
      {image ? (
        <meta property="og:image" content={image} />
      ) : (
        <meta property="og:image" content={Ts} />
      )}
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta name="twitter:card" content="summary_large_image" />
      {image ? (
        <meta property="twitter:image" content={`${sitePath}${image}`} />
      ) : (
        <meta
          property="twitter:image"
          content={`${sitePath}${site.siteMetadata.portfolioImage}`}
        />
      )}
      <meta name="twitter:title" content="タイトル" />
      <meta name="twitter:description" content="詳細" />
    </Helmet>
  );
};

export default Seo;
