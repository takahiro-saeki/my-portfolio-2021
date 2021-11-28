import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

// { title, meta }
const Seo = ({ image, description, title = null }) => {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
          }
        }
        allFile(filter: { name: { eq: "ts" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );

  const { siteMetadata } = site;

  const sitePath = 'https://takahiro-saeki.tech';

  const imgSrc = getImage(allFile.edges[0].node.childImageSharp.gatsbyImageData)
    .images.fallback.src;

  const parceUrl = React.useMemo(() => {
    if (!image) {
      return `${sitePath}${imgSrc}`;
    }
    return `${sitePath}${image}`;
  }, [image, imgSrc]);

  return (
    <Helmet>
      <meta property="og:image" content={parceUrl} />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={parceUrl} />
      <meta name="twitter:title" content={title || siteMetadata.title} />
      <meta
        name="twitter:description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  );
};

export default Seo;
