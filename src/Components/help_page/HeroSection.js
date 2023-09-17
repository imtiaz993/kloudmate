import React from 'react';
import CustomerLogos from '../common/CustomerLogos';
import SectionHeading from '../common/SectionHeading';
import ContactForm from './ContactForm';

function HeroSection() {
  return (
    <div className="mb-20 grid grid-cols-1 md:mt-14 md:mb-28 lg:mt-20 lg:mt-28 lg:grid-cols-2 lg:space-x-3">
      <div>
        <div>
          <SectionHeading heading="Talk to Us" className="lg:text-left" />
          <h1 className=" mt-6 text-center text-5xl font-bold text-white lg:pr-28 lg:text-left lg:text-[64px] lg:leading-[74px]">
            How can we help?
          </h1>
          <p className="mx-auto mt-6 text-center text-grey-400 md:max-w-lg lg:mx-0 lg:text-left">
            We’re here to help and answer any question you might have, we look
            forward to hearing from you.
          </p>
        </div>
        <div className="mt-20 hidden lg:block lg:w-[90%]">
          <h1 className="text-2xl font-bold text-white md:text-left">
            You’ll be in good company
          </h1>
          <div className="mt-10">
            <CustomerLogos col={3} />
          </div>
        </div>
      </div>
      <div className="m-0 p-0 lg:hidden">
        <h1 className="mt-20 text-center text-white">
          You’ll be in good company
        </h1>
        <CustomerLogos />
      </div>
      <ContactForm />
    </div>
  );
}

export default HeroSection;
