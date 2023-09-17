import React, { useState } from 'react';
import { AiFillCheckCircle, AiFillStar } from 'react-icons/ai';
import SectionHeading from '../common/SectionHeading';
import { Link } from 'gatsby';
import cx from 'classnames';
import Plans from '../../data/products.json';

function HeroSection() {
  const [isMonthly, setMonthly] = useState(false);

  return (
    <div className="md:mt-14">
      <div className="mx-auto w-[95%] space-y-5 text-center">
        <SectionHeading heading="Pricing" />
        <h1 className="inline-block text-[40px] font-bold leading-[44px] text-white md:text-[56px] md:leading-[61.6px] xl:text-[58px] xl:leading-[76.8px]">
          There is a plan for all kinds of usage.
        </h1>
        <p className="text-grey-400">
          Start for free. Unlimited accounts and users! Pay only when usage
          grows.
        </p>
      </div>

      <div className="flex flex-col items-center lg:my-8">
        {/*<div className="mt-4 text-primary">🥳 Introductory Pricing 🎉</div>*/}
        <div className="mt-6 space-x-2 rounded-full bg-dark-300 p-1 text-grey-400">
          <button
            className={`rounded-full py-2 px-2 text-xs font-medium uppercase lg:px-6 lg:text-sm ${!isMonthly && 'bg-dark-400 text-white'
              }`}
            onClick={() => setMonthly(false)}
          >
            20% discount - Pay Yearly
          </button>
          <button
            className={`rounded-full py-2 px-2 text-xs font-medium uppercase lg:px-6 lg:text-sm ${isMonthly && 'bg-dark-400 text-white'
              }`}
            onClick={() => setMonthly(true)}
          >
            Pay Monthly
          </button>
        </div>

        <div className="my-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {Plans.map((i, idx) => {
            const prevPlan = Plans[idx - 1];
            return (
              <div
                key={idx}
                className={cx(
                  'relative flex flex-col overflow-clip rounded-2xl p-6 text-white',
                  {
                    ['bg-primary']: i.recommended,
                    ['bg-dark-200']: !i.recommended,
                  }
                )}
              >
                <div className="mb-3">
                  <h4 className="text-5xl font-black leading-relaxed text-white">
                    {i.name}
                  </h4>
                  <p className="mb-4 text-sm">{i.subtitle}</p>
                  {i.recommended && (
                    <div className="absolute right-[-26px] top-[-14px] rotate-45 border-x-[40px] border-b-[40px] border-x-transparent border-b-white">
                      <AiFillStar className="absolute top-4 left-[-3px] text-lg text-primary" />
                    </div>
                  )}
                </div>
                <div className="mb-3 text-xs opacity-75">
                  {i.price ? 'Starting at' : <span>&nbsp;</span>}
                </div>

                <div className="mb-6">
                  {i.price === 0 ? (
                    <div>
                      <h3 className="mb-2 text-[40px] font-thin text-white">
                        $0
                      </h3>
                      <div className="font-thin leading-relaxed">Forever</div>
                    </div>
                  ) : i.custom ? (
                    <>
                      <h3 className="mb-3 text-[40px] font-thin text-white">
                        Custom
                      </h3>
                      <div className="text-base font-thin">Get in touch</div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-[40px] font-thin text-white">
                        ${isMonthly ? i.price.monthly : i.price.yearly}
                        <span className="text-lg">/month</span>
                        <div className="text-base">
                          {isMonthly ? 'Billed monthly' : 'Billed annually'}
                        </div>
                      </h3>
                    </>
                  )}
                </div>
                <div className="mb-6">
                  {i.custom ? (
                    <a
                      data-event-name={`${i.name} Sign Up Intent`}
                      href="/help"
                      className="inline-block w-full rounded-3xl bg-primary px-8 py-3 text-center font-bold hover:bg-primary-light"
                    >
                      Contact sales
                    </a>
                  ) : (
                    <a
                      data-event-name={`${i.name} Sign Up Intent`}
                      href="https://app.kloudmate.com/signup"
                      className={cx(
                        'inline-block w-full rounded-3xl px-8 py-3 text-center font-bold',
                        {
                          ['bg-white text-black hover:bg-grey-200']:
                            i.recommended,
                          ['bg-primary hover:bg-primary-light']: !i.recommended,
                        }
                      )}
                    >
                      {i.price === 0 ? 'Get started' : 'Try FREE for 14 days'}
                    </a>
                  )}
                </div>
                <div className="mb-auto w-full">
                  {i.features.map((f, ii) => (
                    <div
                      key={ii}
                      className="mb-2 flex items-center justify-between font-thin"
                    >
                      <span>{Array.isArray(f) ? f[0] : f}</span>
                      {Array.isArray(f) && typeof f[1] === 'string' ? (
                        <span>{f[1]}</span>
                      ) : (
                        <AiFillCheckCircle
                          color={i.recommended ? '#FFFFFF' : '#F8A563'}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*<div className="text-center">*/}
      {/*  <Link*/}
      {/*    to="#compare"*/}
      {/*    className="text-primary underline decoration-dotted transition-all hover:text-primary-light"*/}
      {/*  >*/}
      {/*    Compare all features →*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
}

export default HeroSection;
