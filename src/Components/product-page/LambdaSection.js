import React from 'react';
// import SmartInsights from '../../images/product_assets/smart_insights.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const LambdaSection = ({ image }) => {
  const SmartInsights = getImage(image);
  return (
    <div className="container mx-auto mt-16">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12 xl:grid-cols-[auto_1fr] xl:gap-16">
        <div className="row-start-2 w-full md:row-start-1 md:mt-8">
          <GatsbyImage className="max-w-xl" image={SmartInsights} alt="" />
        </div>
        <div className="grid w-full grid-cols-1 text-center md:mt-5 md:text-left">
          {/* <h3 className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            AWS Lambda
          </h3> */}
          <SectionHeading center={false} heading="AWS Lambda" />
          <h2 className="mt-5 font-bold text-white">
            AWS Lambda Monitoring for
            <span className="text-primary"> Developers</span> and{' '}
            <span className="text-primary">DevOps</span> teams
          </h2>
          <p className="mt-2 text-grey-400">
            Simple interface to track all your Lambda functions. Quickly view
            key metrics, identify errors, and resolve them.
          </p>
          <p className="mt-2 text-grey-400">
            Automatic instrumentation of serverless applications, deep insights
            on
            <span className="font-bold text-white"> invocations</span>,{' '}
            <span className="font-bold text-white">cold starts</span>,{' '}
            <span className="font-bold text-white">billed duration</span>,{' '}
            <span className="font-bold text-white">memory utilization</span>,
            errors and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LambdaSection;
