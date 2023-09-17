import React from 'react';
// import Inventory from '../../images/product_assets/inventory.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const LearnMoreSection = ({ image }) => {
  const Inventory = getImage(image);
  return (
    <div className="container mx-auto mt-7 md:mt-28">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12 xl:grid-cols-[auto_1fr]">
        <div className="row-start-2 w-full md:row-start-1">
          <GatsbyImage image={Inventory} className="mx-auto max-w-xl" alt="" />
        </div>

        <div className="grid gap-4 text-center md:text-left">
          {/* <p className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            learn more
          </p> */}
          <SectionHeading center={false} heading="Learn More" />
          <div className="space-y-5">
            <h2 className="mx-auto font-bold text-white">
              Zero-setup <br />{' '}
              <span className="text-primary">Observability</span> of Your AWS
              <span className="text-primary"> Serverless </span>
              Stack
            </h2>
            <p className="mx-auto mt-2 text-grey-400">
              Don't waste precious time setting up monitoring tools. Enjoy a
              near-instant setup process and get started in minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
