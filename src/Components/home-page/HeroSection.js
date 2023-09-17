import React from 'react';

function HeroSection() {
  return (
    <>
      {/* Home-Page Content */}
      <section className="items-center md:mt-8 md:pb-4 xl:mt-10 xl:pb-8">
        {/* Hero Text */}
        <section className="flex flex-col items-center ">
          <section className="flex justify-center py-2 font-bold text-white">
            <h1 className="inline-block text-center text-[34px] font-bold leading-[42px] xs:text-[40px] xs:leading-[44px] md:text-[56px] md:leading-[61.6px] xl:text-[58px] xl:leading-[76.8px]">
              Prevent Application Misbehavior
            </h1>
          </section>

          <p className="mt-2 text-lg font-semibold text-[#9CA3AF] md:text-xl lg:text-3xl">
            Enhanced by the Power of
            <span className="text-[#F5A800]"> Open</span>
            <span className="text-blue">Telemetry</span>
          </p>
        </section>
      </section>
    </>
  );
}

export default HeroSection;
