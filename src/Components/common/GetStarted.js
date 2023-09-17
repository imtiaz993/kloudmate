import React from 'react';
import { Link } from 'gatsby';
import GetStartedBackground from '../../images/home-page-assets/get_started_bg.svg';

function GetStarted({ title }) {
  return (
    <>
      <section
        className="relative mx-auto flex max-w-7xl flex-col items-center justify-center rounded-3xl bg-primary bg-cover bg-no-repeat py-12 px-8 text-center text-white md:py-20 lg:py-24 xl:py-28"
        style={{
          backgroundImage: `url("${GetStartedBackground}")`,
        }}
      >
        <h2 className="leading-relaxed">Get Started Today</h2>
        <p className="mb-8 md:text-lg">
          Setup in less than 5 minutes! No credit card required.
        </p>
        <a
          data-event-name="Sign Up Intent"
          href="https://app.kloudmate.com/signup"
          className="rounded-full bg-white py-2 px-5 text-base font-bold text-black hover:bg-grey-200 md:px-10 md:py-4"
        >
          Connect AWS Account
        </a>
      </section>
    </>
  );
}

export default GetStarted;
