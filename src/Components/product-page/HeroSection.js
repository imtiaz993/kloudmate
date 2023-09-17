import React from 'react';

export default function HeroSection() {
  return (
    <>
      <section className="items-center md:mt-8 md:pb-4 xl:mt-10 xl:pb-6">
        {/* Hero Text */}
        <section className="flex flex-col items-center ">
          <section className="flex justify-center py-2 font-bold text-white">
            <h1 className="inline-block text-center text-xl font-bold md:w-3/4 md:text-3xl xl:text-[44px] xl:leading-[60px]">
              Monitor, Trace and Debug Your
              <span className="text-primary xl:leading-[60px]"> Distributed </span>Applications

            </h1>
          </section>

          <p className="mt-6 w-11/12 text-center text-sm  text-[#9CA3AF] md:text-lg lg:text-2xl">
            An Engineer's Complete Toolkit: Log Analysis, Event Tracking,
            Metrics Visualization, and Trace Diagnostics
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              data-event-name="Sign Up Intent"
              href="https://app.kloudmate.com/signup"
              className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark md:px-10 md:py-4"
            >
              Get Started. It’s Free
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
