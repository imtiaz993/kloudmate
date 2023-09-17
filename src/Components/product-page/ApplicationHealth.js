import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import GIF from '../../images/product_assets/application-health.mp4';

const ApplicationHealth = () => {
  return (
    <div className="container mx-auto mt-14">
      <h2 className="my-5 text-center text-xl font-bold text-white md:text-3xl xl:text-[44px] xl:leading-[60px]">
        Your Entire Application’s Health. In a single glance
      </h2>
      <div className="mt-5 md:mt-14 grid grid-cols-1 items-center justify-between gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">
        <div>
          <video autoPlay muted loop>
            <source src={GIF} type="video/mp4" />
          </video>
        </div>
        <div className="grid w-full gap-4 mt-4 md:mt-0 text-left">
          <div className="flex items-start">
            <StaticImage
              src="../../images/product_assets/tick.svg"
              className="mr-3 mt-1 w-6"
              alt=""
            />
            <p className="mx-auto mb-4 font-normal text-grey-400 lg:text-lg w-[calc(100%-24px)]">
              Quickly monitor crucial metrics, dependencies, and detect
              anomalies through alarms and issue tracking.{' '}
            </p>
          </div>
          <div className="flex items-start">
            <StaticImage
              src="../../images/product_assets/tick.svg"
              className="mr-3 mt-1 w-6"
              alt=""
            />
            <p className="mx-auto mb-4 font-normal text-grey-400 lg:text-lg w-[calc(100%-24px)]">
              Instantly locate ‘break-points’ in your application development
              lifecycle, to proactively fix issues.{' '}
            </p>
          </div>
          <div className="flex items-start">
            <StaticImage
              src="../../images/product_assets/tick.svg"
              className="mr-3 mt-1 w-6"
              alt=""
            />
            <p className="mx-auto mb-4 font-normal text-grey-400 lg:text-lg w-[calc(100%-24px)]">
              View service maps for every component in your application, and
              uncover intricate interconnections and dependencies.
            </p>
          </div>
          <div className="flex items-start">
            <StaticImage
              src="../../images/product_assets/tick.svg"
              className="mr-3 mt-1 w-6"
              alt=""
            />
            <p className="mx-auto mb-4 font-normal text-grey-400 lg:text-lg w-[calc(100%-24px)]">
              Trace every request and operation, providing detailed visibility
              into execution paths and performance metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHealth;
