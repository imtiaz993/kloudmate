import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const ProjectSection = ({ project, billing }) => {
  const projects = getImage(project);
  const billings = getImage(billing);
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-32">
      <div className="md:relative md:flex md:flex-col md:justify-between">
        <div className="flex flex-col justify-center text-center md:text-left lg:space-y-4">
          {/* <p className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            Projects
          </p> */}
          <SectionHeading center={false} heading="Projects" />
          <h2 className="mt-5 text-white">
            Unified Project <br />
            <span className="text-primary">Workflows</span>
          </h2>
          <p className="mt-2 text-grey-400">
            Group related resources together into ‘Projects’ and maintain a
            razor-sharp, focussed workflow. Either for yourself, or while
            working with your teammates.
          </p>
        </div>

        <GatsbyImage
          image={projects}
          className="mt-8"
          objectFit="contain"
          alt="Projects - AWS Resources Group - Lambda Functions, DynamoDB Tables, SQS Queues"
        />
      </div>

      <div className="mt-20 md:mt-0">
        <div className="flex w-full flex-col justify-center text-center md:text-left lg:space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            Billing
          </p>
          <h2 className="mt-5 font-bold text-white">
            Integrated<span className="text-primary"> Billing Forecasts</span>{' '}
            and Cost Trends
          </h2>
          <p className="mt-2 text-grey-400">
            We get it. Navigating numerous pages on the AWS console can be such
            a pain-in-the-***!
          </p>
          <p className="mt-2 text-grey-400">
            Get a quick overview of your AWS account's billing patterns and
            cross-region resources. Spot unusual spikes, compare budgets vs.
            actuals, and audit billed resources.
          </p>
        </div>

        <div className="mt-8">
          <GatsbyImage
            image={billings}
            alt="Dashboard - Cost Trends and Forecast"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
