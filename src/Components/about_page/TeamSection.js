import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TeamInfoCard from '../common/TeamInfoCard';
import SectionHeading from '../common/SectionHeading';

const TeamSection = () => {
  const queryResult = useStaticQuery(graphql`
    query teamAvatarsQuery {
      allFile(filter: { relativeDirectory: { in: "about_assets/avatar" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 150
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);
  const images = queryResult.allFile.edges;

  const data = [
    {
      avatar: 'bidyut_baruah',
      name: 'Bidyut Baruah',
      role: 'Co-Founder (Sales)',
      LinkedInLink: 'https://www.linkedin.com/in/bidyutbaruah/',
      TwitterLink: 'https://twitter.com/imbidyutbaruah',
    },

    {
      avatar: 'amitava_saha',
      name: 'Amitava Saha',
      role: 'Co-Founder (Technology)',
      LinkedInLink: 'https://www.linkedin.com/in/amitavaksaha/',
      TwitterLink: 'https://twitter.com/amitava82',
    },
    {
      avatar: 'pranab_buragohain',
      name: 'Pranab Buragohain',
      role: 'Co-Founder (Marketing)',
      LinkedInLink: 'https://www.linkedin.com/in/pranabburagohain/',
      TwitterLink: 'https://twitter.com/pranabgohain',
    },
    {
      avatar: 'mudabbir',
      name: 'Mudabbir Sharieff',
      role: 'Sales & Customer Success',
      LinkedInLink: 'https://www.linkedin.com/in/mudabbir-sharieff-bb002b217/',
      TwitterLink: 'https://twitter.com/MudabbirSharie3',
    },
    {
      avatar: 'akanksha_rana',
      name: 'Akanksha Rana',
      role: 'Sr. Tech. Writer',
      LinkedInLink: 'https://www.linkedin.com/in/akanksha-rana-93d1111/',
      TwitterLink: 'https://twitter.com/akanksha1rana',
    },
    {
      avatar: 'Vijai',
      name: 'Vijai Aadhithya',
      role: 'QA Engineer',
      LinkedInLink:
        'https://www.linkedin.com/in/vijai-aadhithya-sampath-a56340154/',
      TwitterLink: 'https://twitter.com/VijaiAadhithya3',
    },
    {
      avatar: 'vinay_gaddam',
      name: 'Vinay Gaddam',
      role: 'Software Developer',
      LinkedInLink: 'https://www.linkedin.com/in/vinay-gaddam/',
      TwitterLink: 'https://twitter.com/vinay2897',
    },
    {
      avatar: 'soumya_dash',
      name: 'Soumya Dash',
      role: 'DevOps Engineer',
      LinkedInLink: 'https://www.linkedin.com/in/soumya-ranjan-dash-5a06a8168/',
      TwitterLink: 'https://twitter.com/_Soumya_Ranjan_',
    },
    {
      avatar: 'sanjay_das',
      name: 'Sanjay Das',
      role: 'QA Engineer',
      LinkedInLink: 'https://www.linkedin.com/in/sanjaydas9027/',
      TwitterLink: 'https://twitter.com/sanjaykumardas_',
    },
    {
      avatar: 'saumya_kumari',
      name: 'Saumya Kumari',
      role: 'People Officer',
      LinkedInLink: 'https://www.linkedin.com/in/saumya-kumari-817a8ab7/',
      TwitterLink: 'https://twitter.com/Saumya___8',
    },
    {
      avatar: 'vasavi',
      name: 'Vasavi R',
      role: 'Marketing',
      LinkedInLink: 'https://www.linkedin.com/in/vasavi-rv-0b2582231/',
      TwitterLink: 'https://twitter.com/Vasavi_R6',
    },
    {
      avatar: 'samarpita',
      name: 'Samarpita Dutta',
      role: 'Business Development',
      LinkedInLink:
        'https://www.linkedin.com/in/samarpita-dutta-choudhury-848847a5',
      TwitterLink: 'https://twitter.com/choudhury_dutta',
    },
    {
      avatar: 'nakul',
      name: 'Nakul Gunjala',
      role: 'Software Developer',
      LinkedInLink:
        'https://www.linkedin.com/in/nakul-gunjal-049579189/',
      TwitterLink: 'https://twitter.com/gunjal_nakul',
    },
    {
      avatar: 'lalith',
      name: 'Lalith Kumar',
      role: 'DevOps Engineer',
      LinkedInLink:
        'https://www.linkedin.com/in/lalith-kumar-b01688278/',
      TwitterLink: '',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid justify-items-center">
        <div className="flex w-full flex-col items-center justify-center text-center md:mx-5 md:w-4/5 md:p-7 lg:ml-10 lg:w-2/3 lg:space-y-10">
          <SectionHeading heading="KloudMate Team" />
          <h1 className="my-5 text-4xl font-bold text-white lg:text-6xl">
            Meet the team
          </h1>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-4">
          {data.map(
            ({ avatar, name, role, LinkedInLink, TwitterLink }, idx) => (
              <TeamInfoCard
                key={idx}
                avatar={
                  images.find((i) => i.node.name === avatar)?.node
                    .childImageSharp.gatsbyImageData
                }
                name={name}
                role={role}
                linkedInLink={LinkedInLink}
                twitterLink={TwitterLink}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
