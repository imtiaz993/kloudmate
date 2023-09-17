import React from 'react';
import comunity_help from 'src/images/contact_assets/comunity_help.png';
import right_arrow from 'src/images/contact_assets/right_arrow.png';
import SectionHeading from '../common/SectionHeading';

function ComunityHelp() {
  return (
    <div className="mt-28 mb-24 md:mt-52">
      <div className="grid grid-flow-row items-center md:grid-flow-col">
        <div className="w-full">
          <SectionHeading className="lg:text-left" heading="Community Forum" />
          <h1 className="mt-6 text-2xl font-bold text-white sm:text-[28px] md:text-3xl lg:text-4xl">
            Join us on Slack{' '}
          </h1>
          <p className="mt-6 font-normal text-grey-400 sm:text-sm md:pr-10 md:text-base">
            Join The <span className="text-primary">Serverless Collective</span>
            , our exclusive community of the world's most passionate Serverless
            pros 🚀
          </p>
          <button className="mt-6 border-b-2 border-dark-300">
            <p className="flex items-center text-base font-bold text-white">
              <a
                href="https://join.slack.com/t/serverless-collective/shared_invite/zt-zvzq985i-Khwnq2jsm5uLTdBe87gCgw"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Join our Slack community{' '}
              </a>
              <span className="pl-2">
                <img src={right_arrow} alt="" />
              </span>
            </p>
          </button>
        </div>
        <div>
          <img
            src={comunity_help}
            alt=""
            className="mt-6 object-contain sm:h-[226px] sm:w-[334px] md:mt-0 lg:mr-10 lg:h-[272px] lg:w-[416px]"
          />
        </div>
      </div>
    </div>
  );
}
export default ComunityHelp;
