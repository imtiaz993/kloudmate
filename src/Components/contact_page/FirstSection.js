import React from 'react';
import chat_icon from 'src/images/contact_assets/chat_icon.svg';
import mail_icon from 'src/images/contact_assets/mail_icon.svg';
import question_icon from 'src/images/contact_assets/question_icon.svg';
import { Link } from 'gatsby';
import SectionHeading from '../common/SectionHeading';

function FirstSection() {
  return (
    <div className="md:mt-14 md:mb-24">
      <div className="flex w-full flex-col text-center">
        <SectionHeading heading="Contact Us" />
        <h2 className="mt-6 text-4xl font-semibold leading-normal text-white md:text-5xl lg:text-6xl">
          We're always here to help.
        </h2>
        <p className="mt-6 text-gray-500">
          Whether you’d like a demo, have a support question, or a pricing
          related query, just <b>get in touch</b>.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-y-40 md:grid-cols-3 md:flex-row md:gap-4 lg:gap-9 ">
        <div className="flex h-[260px] flex-col items-center rounded-3xl bg-gradient-to-b from-dark-300 text-center md:h-[450px] lg:h-[450px]">
          <div className="mt-12 md:mt-16">
            <img
              src={mail_icon}
              alt=""
              className="h-[72px] w-[72px] rounded-2xl border-4 border-primary-lighter bg-primary px-4 py-4  font-semibold text-gray-700"
            />
          </div>
          <h1 className="mt-10 text-lg font-semibold leading-normal text-white md:text-2xl lg:text-2xl">
            Email us
          </h1>
          <p className="mt-8 flex-1 px-8 text-gray-400 md:px-2">
            Write to us at{' '}
            <span className="text-white">hello@kloudmate.com.</span> We are
            constantly looking at our inbox.
          </p>
          <Link
            to="/help"
            className="mt-11 w-64 w-48 rounded-full border-2 border-solid border-primary-light bg-transparent py-3 font-semibold text-white hover:bg-primary md:py-2 lg:mt-[54px] lg:w-64 lg:py-3"
          >
            Get in touch
          </Link>
        </div>
        <div className="flex h-[300px] flex-col items-center rounded-3xl bg-gradient-to-b from-dark-300 text-center md:h-[450px] lg:h-[450px]">
          <div className="mt-12 md:mt-16">
            <img
              src={chat_icon}
              alt=""
              className="h-[72px] w-[72px] rounded-2xl border-4 border-primary-lighter bg-primary px-4 py-4  font-semibold text-gray-700"
            />
          </div>
          <h1 className="mt-10 text-lg font-semibold leading-normal text-white md:text-2xl lg:text-2xl">
            Talk to us{' '}
          </h1>
          <p className="mt-8 flex-1 px-8 text-gray-400 md:px-2">
            Take a 20-minute demo, to learn how KloudMate can be tailored to
            tackle your specific needs. Choose a time-slot that works best for
            you.
          </p>
          <a
            href="https://meet.kloudmate.com/book/kloudmate"
            target="_blank"
            rel="noreferrer"
            className="mt-11 w-48 rounded-full border-2 border-solid border-primary-light bg-transparent py-3 font-semibold text-white hover:bg-primary md:py-2 lg:mt-[54px] lg:w-64 lg:py-3"
          >
            Request a demo
          </a>
        </div>
        <div className="flex h-[300px] flex-col items-center rounded-3xl bg-gradient-to-b from-dark-300 text-center md:h-[450px] lg:h-[450px]">
          <div className="mt-12 md:mt-16">
            <img
              src={question_icon}
              alt=""
              className="h-[72px] w-[72px] rounded-2xl border-4 border-primary-lighter bg-primary px-4 py-4  font-semibold text-gray-700"
            />
          </div>
          <h1 className="mt-10 text-lg font-semibold leading-normal text-white md:text-2xl lg:text-2xl">
            Documentation{' '}
          </h1>
          <p className="mt-8 flex-1 px-8 text-gray-400 md:px-2">
            Refer to detailed documentation that covers all the platform
            features and frequently asked questions
          </p>
          <a
            href="https://docs.kloudmate.com"
            target="_blank"
            className="mt-11 w-48 rounded-full border-2 border-solid border-primary-light bg-transparent py-3 font-semibold text-white hover:bg-primary md:py-2 lg:mt-[54px] lg:w-64 lg:py-3"
          >
            Visit help center
          </a>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
