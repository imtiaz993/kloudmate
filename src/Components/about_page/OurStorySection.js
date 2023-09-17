import React from 'react';
import SectionHeading from '../common/SectionHeading';

const OurStorySection = () => {
  return (
    <div className="container mx-auto">
      <div className="grid justify-items-center">
        <div className="flex w-full flex-col items-center justify-center text-center lg:w-4/5 xl:flex-row xl:space-x-20 xl:text-left">
          <div>
            <SectionHeading center={false} heading="How it started" />
            <h1 className="my-5 text-4xl font-bold text-white md:text-6xl">
              Our Story
            </h1>
          </div>
          <div className="mx-auto w-[90%] text-grey-400 md:w-4/5">
            <p className="text-grey-400 ">
              <span className="font-bold text-white"> KloudMate</span> was born
              in the summer of 2021, when 3 friends-cum-acquaintances with
              common interests and life goals, uncovered the many issues faced
              by businesses when adopting future-ready technologies on the
              cloud.
            </p>
            <p className="my-5">
              Soon, we set out to build what we believe will eventually go on to
              become synonymous with everything
              <span className="font-bold text-white"> Observability</span> - for
              intricate, scalable technologies of the future. Be it Serverless,
              Containers, or Kubernetes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
