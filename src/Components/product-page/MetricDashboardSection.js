import React from 'react';
// import Alarm from '../../images/product_assets/alarm.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const ErrorTrackingSection = ({ image }) => {
  const Alarm = getImage(image);
  return (
    <div className="container mx-auto mt-12 lg:mb-8 xl:mt-16">
      <div className="grid-row grid gap-6 md:grid-cols-2 md:gap-12 xl:grid-cols-[auto_1fr] xl:gap-16">
        <div className="row-start-2 mt-10 w-full md:row-start-1 md:mt-8">
          <GatsbyImage className="max-w-xl" image={Alarm} alt="alarms" />
        </div>
        <div className="flex w-full flex-col justify-center text-center md:text-left lg:space-y-5">
          {/* <p className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            Issue Tracker
          </p> */}
          <SectionHeading center={false} heading="Metrics Dashboards" />
          <h2 className="font-bold text-white ">
            Create your own <span className="text-primary">Dashboards</span>
          </h2>
          <p className="text-grey-400">
            Every application has unique monitoring needs. Quickly configure
            your custom dashboards by selecting multiple datasets, metrics and
            statistics, add queries or expressions, and save them as 'Panels'
            within your dashboards. These panels populate all the insights YOU
            want to look at, everytime you view them. In real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorTrackingSection;
