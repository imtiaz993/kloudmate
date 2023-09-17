import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const DebugFaster = () => {
  return (
    <div className="grid items-start gap-6 pt-10 md:grid-cols-2 md:gap-10 md:pt-28 lg:gap-12">
      <div className="text-center md:text-left">
        <h2 className="font-bold text-white">
          Debug Faster with a<span className="text-primary"> 360-degree</span>
          {' view'}
        </h2>
        <p className="mt-4 w-11/12 font-normal text-grey-400 lg:text-lg">
          Supercharge debugging speed and precision with a complete system view.
          Identify and resolve issues faster than ever before.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <a
            data-event-name="Sign Up Intent"
            href="https://app.kloudmate.com/signup"
            className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark md:px-10 md:py-4"
          >
            Get Started for Free
          </a>
        </div>
      </div>
      <div className="mx-auto">
        <div className="grid w-full gap-4 text-left">
          <div className="flex items-start">
            <StaticImage
              src="../../images/product_assets/tick.svg"
              className="mr-3 mt-1 w-6"
              alt=""
            />
            <p className="mx-auto mb-4 w-[calc(100%-24px)] font-normal text-grey-400 lg:text-lg">
              Centralized <span className="font-bold"> Log Management </span>{' '}
              for in-depth analytics of what’s going on.
            </p>
          </div>

          <div className="flex items-start">
            <StaticImage
              src="../../images/product_assets/tick.svg"
              className="mr-3 mt-1 w-6"
              alt=""
            />
            <p className="mx-auto mb-4 w-[calc(100%-24px)] font-normal text-grey-400 lg:text-lg">
              Whether you’re running on multi-cloud, hybrid or private
              architecture, access unified{' '}
              <span className="font-bold"> Infrastructure Monitoring </span>
              capabilities to monitor metrics and gather insights into every
              component of your deployments.
            </p>
          </div>
          <div className="flex items-start">
            <StaticImage
              src="../../images/product_assets/tick.svg"
              className="mr-3 mt-1 w-6"
              alt=""
            />
            <p className="mx-auto mb-4 w-[calc(100%-24px)] font-normal text-grey-400 lg:text-lg">
              Unleash the power of
              <span className="font-bold"> Distributed Tracing </span>to obtain
              a comprehensive view of application performance and quickly delve
              into specific transactions to pinpoint the underlying causes of
              problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugFaster;
