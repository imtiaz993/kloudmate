import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function CustomerLogos({ col = 6 }) {
  const data = useStaticQuery(graphql`
    query customerLogosQuery {
      allFile(
        filter: { relativeDirectory: { eq: "home-page-assets/brand_logos" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);
  const images = data.allFile.edges;

  const customerLogos = [
    {
      company: 'Andela',
      id: 'and_logo_grey',
    },

    {
      company: 'Unacademy',
      id: 'unacademy_grey',
    },

    {
      company: 'WeAdmit',
      id: 'we_admit_grey',
    },

    {
      company: 'NewsStand',
      id: 'newstand_grey',
    },

    {
      company: 'Ostrum',
      id: 'ostrum_grey',
    },

    {
      company: 'OpenPath',
      id: 'openpath_grey',
    },


  ];

  const columns = col === 6 ? 'md:grid-cols-6' : 'md:grid-cols-3';

  return (
    <div
      className={`mt-12 grid grid-cols-3 justify-items-center gap-6	px-2 sm:gap-8 sm:px-0 md:mt-16 ${columns}  xl:mt-20`}
    >
      {customerLogos.map(({ company, id }, idx) => (
        <GatsbyImage
          objectFit="contain"
          className={`h-6 md:w-24 ${idx === 1 && '-ml-2'} xl:h-11 xl:w-44`}
          image={getImage(
            images.find(({ node }) => node.name === id).node.childImageSharp
          )}
          key={id}
          alt={company}
        />
      ))}
    </div>
  );
}

export default CustomerLogos;
