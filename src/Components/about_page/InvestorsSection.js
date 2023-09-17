import React from 'react';
import IOOx from '../../images/about_assets/100x.svg';
import amvc from '../../images/about_assets/2amvc.svg';
import JITO from '../../images/about_assets/jito.jpeg';
import LetsVenture from '../../images/about_assets/letsventure.svg';

function InvestorsSection() {
  return (
    <div className="grid-row container mx-auto grid justify-items-center rounded-3xl bg-[#191C24] py-5">
      <div className="flex w-full flex-col justify-between p-5 py-10 text-center md:w-4/5">
        <h2 className="mb-8 text-lg font-bold text-white lg:text-3xl">
          We're backed by world-class investors:
        </h2>
        <div className="my-5 grid grid-cols-2 place-items-center gap-7 md:mx-6 md:grid-cols-4">
          <img src={IOOx} alt="100X.VC" />
          <img src={amvc} alt="2AM.VC" />
          <img src={JITO} style={{ height: 55 }} alt="JITO" />
          <img src={LetsVenture} alt="Lets Venture" />
        </div>
      </div>
    </div>
  );
}

export default InvestorsSection;
