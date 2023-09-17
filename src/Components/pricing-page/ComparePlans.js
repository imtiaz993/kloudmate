import React, { useState, useRef } from 'react';
import CategoryPlans from '../common/CategoryPlanTable';
import { plans } from '../../shared-data/plans';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AddIcon, MinusIcon } from '../common/Icons';

function ComparePlans() {
  const [pricingPlanOpen, setPricingPlanOpen] = useState(
    new Array(4).fill(false)
  );

  const contentRef = useRef(null);

  const openAccordion = (index) => {
    setPricingPlanOpen((state) =>
      state.map((_, idx) => (index === idx ? !state[idx] : state[idx]))
    );
  };

  return (
    <div className="my-12 space-y-8 lg:my-24">
      <h2 className="text-center text-white">Compare Plans</h2>

      <div className="space-y-3 text-white">
        <div className="mt-4 space-y-4 md:hidden">
          {plans.map(({ categoryTitle, options }, idx) => (
            <div
              role="button"
              tabIndex="0"
              onKeyDown={() => {}}
              key={categoryTitle}
              className={`w-full border-2 bg-dark-200 px-4 ${
                pricingPlanOpen[idx]
                  ? ' border-primary py-3'
                  : 'border-dark-300 pt-3 pb-0'
              } rounded-lg`}
              onClick={() => openAccordion(idx)}
            >
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold">{categoryTitle}</p>
                {pricingPlanOpen[idx] ? <MinusIcon /> : <AddIcon />}
              </div>
              <div
                className="transition-all duration-700"
                ref={contentRef}
                style={
                  pricingPlanOpen[idx]
                    ? { maxHeight: '1000px' }
                    : { maxHeight: 0, visibility: 'hidden', opacity: 0 }
                }
              >
                <div className="space-y-4">
                  <h4 className="my-4 text-left text-sm font-semibold text-[#929AB5]">
                    STARTER
                  </h4>
                  <div className="space-y-4">
                    {options.map(({ title, starter, isHighlighted }) => (
                      <div
                        key={title + 'sssasddsd'}
                        className="flex items-center justify-between"
                      >
                        <p>{title}</p>
                        <p
                          className={`${
                            isHighlighted && 'text-primary-lighter'
                          }`}
                        >
                          {' '}
                          {typeof starter === 'string'
                            ? starter
                            : starter && (
                                <AiFillCheckCircle className="text-primary-lighter" />
                              )}{' '}
                        </p>
                      </div>
                    ))}
                  </div>
                  <hr className="opacity-20" />
                </div>

                <div className="space-y-4">
                  <h4 className="my-4 text-left text-sm font-semibold text-[#929AB5]">
                    PRO
                  </h4>
                  <div className="space-y-4">
                    {options.map(({ title, pro, isHighlighted }) => (
                      <div
                        key={title + 'pasasas'}
                        className="flex items-center justify-between"
                      >
                        <p>{title}</p>
                        <p
                          className={`${
                            isHighlighted && 'text-primary-lighter'
                          } text-sm lg:text-base`}
                        >
                          {' '}
                          {typeof pro === 'string'
                            ? pro
                            : pro && (
                                <AiFillCheckCircle className="text-primary-lighter" />
                              )}{' '}
                        </p>
                      </div>
                    ))}
                  </div>
                  <hr className="opacity-20" />
                </div>

                <div className="space-y-4">
                  <h4 className="my-4 text-left text-sm font-semibold text-[#929AB5]">
                    BUSINESS
                  </h4>
                  <div className="space-y-4">
                    {options.map(({ title, business, isHighlighted }, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between"
                      >
                        <p>{title}</p>
                        <p
                          className={`${
                            isHighlighted && 'text-primary-lighter'
                          } text-sm lg:text-base`}
                        >
                          {' '}
                          {typeof business === 'string'
                            ? business
                            : business && (
                                <AiFillCheckCircle className="text-primary-lighter" />
                              )}{' '}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          {plans.map(({ categoryTitle, options }) => (
            <CategoryPlans
              title={categoryTitle}
              options={options}
              key={categoryTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComparePlans;
