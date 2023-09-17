import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const HeroSection = ({ image }) => {
  const Image = getImage(image);
  return (
    <div className="container mx-auto mt-14">
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center justify-center space-y-5 p-4 pt-0 text-center md:mx-5 md:w-[90%] md:space-y-6 md:p-7 md:pt-0 lg:ml-10 lg:w-[70%] lg:space-y-7">
          {/* <SectionHeading heading="ABOUT US" /> */}
          <SectionHeading heading="About Us" />
          <h1 className="text-4xl font-bold text-white md:!mb-4 md:text-[56px] xl:!mb-2 xl:text-[64px]">
            Hi. We're KloudMate.
          </h1>
          <p className="text-grey-400">
            We are a team of impassioned Developers, Solution Architects, and
            AWS Specialists, who strongly believe in the power of Cloud. And
            that the future is going to be all about microservices and
            distributed systems.
            {/* <span className="font-bold text-white"> #Serverless.</span> */}
          </p>
          <p className="text-grey-400">
            <span className="font-bold text-white">KloudMate </span>
            is our endeavor to help{' '}
            <span className="font-bold text-white">
              Engineering teams{' '}
            </span>{' '}
            reduce mean time to detect and repair (MTTD & MTTR), improve{' '}
            <span className="font-bold text-white">
              application performance
            </span>{' '}
            and enhance user experience. The platform is spellworking for{' '}
            <span className="font-bold text-white">
              Developers, Site Reliability Engineers
            </span>{' '}
            (SREs) and <span className="font-bold text-white">DevOps</span>{' '}
            engineers, who build, deploy & manage applications on microservices
            based architectures and distributed systems.
            <span className="font-bold text-white"></span>
          </p>
        </div>
        <div className="mt-11 flex align-middle">
          <GatsbyImage
            image={Image}
            alt=""
            className="rounded-2xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
