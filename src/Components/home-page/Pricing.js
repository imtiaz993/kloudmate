import { Link } from 'gatsby';
import React from 'react';
import SectionHeading from '../common/SectionHeading';

export default function Pricing() {
    return (
        <div className="z-20 my-12 mb-4 lg:my-24">
            <div className="text-center text-white">
                <SectionHeading heading="Pricing" />
                <h2 className="mx-auto text-white md:w-[80%] ">
                    There is a plan for all kinds of{' '}
                    <span className="text-primary">usage</span>.
                </h2>
                <p className="mx-auto pt-2 text-center font-normal text-grey-400 md:w-11/12 lg:text-lg">
                    Say goodbye to complex pricing models. With KloudMate, you get simple,
                    usage-based pricing that allows you to pay only for what you need. No
                    surprises - just transparent and predictable pricing.
                </p>
                <div className="mt-6 flex justify-center md:justify-center">
                    <Link
                        to="/pricing"
                        className="mt-2 animate-fadeHeroBtn rounded-full bg-primary px-8 py-3 pb-4 text-base font-semibold text-white hover:bg-primary-dark md:px-10 md:py-4"
                    >
                        View Pricing Plans
                    </Link>
                </div>
            </div>
        </div>
    );
}
