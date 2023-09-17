import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import SectionHeading from '../common/SectionHeading';
import logo from '../images/snared_logo.svg';

export default function DevelopersSay() {
  return (
    <div className="mt-10 mb-28">
      <div className="space-y-6 text-center text-white">
        <SectionHeading heading="What Developers Say" />
        <h1 className="leading-relax mx-auto text-4xl font-bold text-white md:w-[70%] md:text-6xl ">
          Loved by everyone at tech republic
        </h1>
      </div>
      <div className="mt-7 md:flex">
        <div className="mt-14 space-x-4 space-y-8 border-gray-700 pl-8 font-bold text-white md:border-l-8">
          <div
            className="md:h-18 md:w-18 relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F47715] text-6xl md:-left-[40%]"
            style={{ fontFamily: 'sans-serif' }}
          >
            {' '}
            <span className="mt-7"> “ </span>{' '}
          </div>
          <p className="mx-auto text-3xl md:w-2/3 lg:text-4xl">
            We really focus on work-life balance in remote work. <br />
            Makes it easy to segment our cash.
          </p>
          <div className="hidden items-center space-x-4 md:flex">
            <span className="rounded-full border border-[#3d3d47] p-3">
              {' '}
              <IoArrowBack />{' '}
            </span>
            <div className="space-x-3 text-3xl">
              <span className="text-[#3d3d47]">•</span>
              <span>•</span>
              <span className="text-[#3d3d47]">•</span>
            </div>
            <span className="rounded-full border border-[#3d3d47] p-3">
              {' '}
              <IoArrowForward />{' '}
            </span>
          </div>
        </div>
        {/* Developer Testimonial Cards */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-8 rounded-2xl bg-[rgb(33,37,48)] px-8 py-10 text-white md:w-[75%] xl:w-[40%]">
          {/* Profile Picture */}
          {/* <img src="" alt="" /> */}
          <div className="mb-4 flex w-full items-center justify-between">
            <div className="rounded-3xl bg-[#18181a] px-4 py-2">
              <h4 className="text-lg font-semibold text-[#F47715]">
                TESTIMONIAL
              </h4>
            </div>
            <img src={logo} alt="" />
          </div>
          <div className="h-20 w-20 rounded-full bg-white"></div>

          <div className="text-center">
            <h3 className="text-xl font-semibold">Michael Koopmans</h3>
            <p className="text-[#9999B3]">Lead Devloper, Snared</p>
            <div className="mt-4 flex items-center space-x-4 md:hidden ">
              <span className="rounded-full border border-[#3d3d47] p-3">
                {' '}
                <IoArrowBack />{' '}
              </span>
              <div className="space-x-3 text-3xl">
                <span className="text-[#3d3d47]">•</span>
                <span>•</span>
                <span className="text-[#3d3d47]">•</span>
              </div>
              <span className="rounded-full border border-[#3d3d47] p-3">
                {' '}
                <IoArrowForward />{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
