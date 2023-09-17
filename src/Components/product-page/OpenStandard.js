import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const OpenStandard = () => {
  return (
    <div className="container mx-auto mt-12 xl:mt-16">
      <div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 xl:grid-cols-[1fr_auto] xl:gap-16">
          <div className="flex w-full flex-col justify-center text-center text-sm md:text-left lg:space-y-5 lg:text-base">
            <h2 className="mt-5 font-bold text-white">Adopt Open Standard</h2>
            <p className="md:w-11/12 mx-auto md:mx-0 mt-8 mb-4 font-normal text-grey-400 lg:text-lg">
              OpenTelemetry enables effortless integrations with your software
              landscape, extending observability across diverse layers. This
              also enables interoperability, extensibility, vendor-neutralism
              and cost-efficiency.
            </p>
            <p className="md:w-11/12 mx-auto md:mx-0 mt-8 mb-4 font-normal text-grey-400 lg:text-lg">
              This unified framework collects, analyzes, and interprets data
              from various sources, providing holistic insights for optimizing
              performance and user experiences, regardless of your architecture.
            </p>
          </div>
          <div className="mt-3 flex justify-center md:mt-8">
            <StaticImage
              src="../../images/product_assets/open-standards.png"
              className=""
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenStandard;
