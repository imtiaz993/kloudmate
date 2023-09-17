import React from 'react';
// import Alarm from '../../images/product_assets/alarm.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const ErrorTrackingSection = ({ image }) => {
  const Alarm = getImage(image);
  return (
    <div className="container mx-auto mt-12 lg:mb-8 xl:mt-16">
      <div className="grid-cols-1 items-center gap-6 md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-[1fr_auto] xl:gap-16">
        <div className="flex flex-col justify-center space-y-5 text-center md:text-left">
          {/* <p className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            Issue Tracker
          </p> */}
          <SectionHeading center={false} heading="Issue Tracker" />
          <h2 className="font-bold text-white ">
            Automatic<span className="text-primary"> Error tracking </span>
          </h2>
          <p className="text-grey-400">
            Don't leave anything to chance. <strong>KloudMate</strong>{' '}
            automatically discovers errors so you can quickly trace and debug
            them.
          </p>
          <p className="text-grey-400">
            Prioritize and track every critical error, and resolve them faster.
            Do all this effortlessly, without the need to install any plugin or
            library in your code!
          </p>
        </div>

        <div className="mt-10 w-full md:mt-8">
          <GatsbyImage className="max-w-xl" image={Alarm} alt="alarms" />
        </div>
      </div>
    </div>
  );
};

export default ErrorTrackingSection;
