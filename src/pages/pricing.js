import React from 'react';
import Navbar from '../Components/common/Navbar';
import ComparePlans from '../Components/pricing-page/ComparePlans';
import Footer from '../Components/common/Footer';
import CTADemo from '../Components/common/CTADemo';
import DevelopersSay from '../Components/home-page/DevelopersSay';
import HeroSection from '../Components/pricing-page/HeroSection';
import FAQSection from '../Components/pricing-page/FAQ';
import Container from '../Components/common/Container';
import { Fade } from 'react-reveal';
import CustomerLogos from '../Components/common/CustomerLogos';
import SEO from '../Components/common/SEO';

function pricing() {
  return (
    <>
      <Navbar />

      <Container>
        {/* Available Pricing Plans */}
        <Fade>
          <HeroSection />
        </Fade>
        <div id="compare">
          <ComparePlans />
          <Fade distance={'50%'} bottom>
            <FAQSection />
          </Fade>
          <div className="my-12 lg:my-24">
            <h3 className="-mb-5 text-center text-base font-bold text-white lg:text-[32px]">
              You're in good company
            </h3>
            <Fade bottom distance="50%">
              <CustomerLogos col={6} />
            </Fade>
          </div>
        </div>
      </Container>

      <Fade distance={'50%'} bottom>
        <div
          className="flex w-full flex-col items-center justify-center bg-dark-900"
          // // style={{ backgroundImage: `url('${SignUpInfo}')` }}
        >
          <div className="mx-auto w-[90%] max-w-7xl bg-dark-900 md:w-[85%]">
            <DevelopersSay />
          </div>
        </div>
      </Fade>

      <Container>
        {/* Get Started Section */}
        <div className="mb-16 mt-24 md:mb-24">
          <CTADemo />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export const Head = () => (
  <SEO
    title="Pricing - KloudMate"
    description="There is a plan for all kinds of usage. KloudMate offers free plan to get started. No credit card required."
  />
);

export default pricing;
