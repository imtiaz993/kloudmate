import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const ConfigureAlertSection = () => {

  return (
    <div className="container mx-auto mt-12 xl:mt-16">
      <div className="grid-row grid gap-6 md:grid-cols-2 md:gap-12 xl:grid-cols-[auto_1fr] xl:gap-16">
        <div className="row-start-2 mt-10 w-full md:row-start-1 md:mt-8">
          <StaticImage className="max-w-xl" src="../../images/product_assets/alarm.png" alt="alarms" />
        </div>
        <div className="flex w-full flex-col justify-center text-center md:text-left lg:space-y-5">
          {/* <p className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            Alarms
          </p> */}
          <SectionHeading center={false} heading="Alarms" />
          <h2 className="mt-5 font-bold text-white">
            Cut through the noise. Create{' '}
            <span className="text-primary">Alarms</span> that matter.
          </h2>
          <p className="mt-2 text-grey-400">
            Use multiple dimensions, add math, reduce or condition expressions,
            and create the most advanced, accurate alerts system for your
            application.{' '}
            <span className="text-primary">
              Identify issues before your users
            </span>{' '}
            do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfigureAlertSection;
