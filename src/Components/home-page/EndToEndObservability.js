import React from 'react';
import GIF from '../../images/home-page-assets/end-to-end-observability.mp4';

export default function EndToEndObservability() {
  return (
    <div className="mt-20 mb-16 md:mt-16 md:mb-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="flex justify-center px-2">
          <video autoPlay muted loop>
            <source src={GIF} type="video/mp4" />
          </video>
        </div>
        <div className="mt-6 md:justify-center">
          <h2 className="text-xl font-bold text-primary md:text-3xl xl:text-[44px]">
            End-to-End
            <span className="inline text-blue"> Observability</span>
          </h2>
          <p className="mt-6 animate-fadeHeroParagraph text-sm font-medium text-[#D9D9D9] md:text-lg lg:text-2xl">
            The missing piece in your Observability puzzle.
          </p>
          <p className="mt-6 animate-fadeHeroParagraph text-sm text-gray-400 md:text-base lg:text-lg">
            Gain access to every byte of application and system data, so
            engineers can monitor, trace and debug your entire stack.
          </p>
        </div>
      </div>
    </div>
  );
}
