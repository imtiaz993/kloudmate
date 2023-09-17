import { Link } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionHeading from '../common/SectionHeading';
import CustomerLogos from '../common/CustomerLogos';

export default function DistinguishedCustomers() {
    return (
        <div className="z-20 my-12 mb-16 md:mb-4 lg:my-24">
            <div className="text-center text-white">
                <SectionHeading heading="Our Distinguished Customers" />
                <h2 className="mx-auto text-white md:w-[80%]">
                    Trusted by <span className="text-blue">Engineers</span> at some
                    remarkable <span className="text-primary">Companies</span>
                </h2>
                <Fade bottom duration={800}>
                    <CustomerLogos col={6} />
                </Fade>
            </div>
        </div>
    );
}
