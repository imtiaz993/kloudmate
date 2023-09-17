import React from 'react';
import Navbar from '../Components/common/Navbar';
import DemoVideo from '../Components/home-page/DemoVideo';
import BackgroundImgNew from '../images/home-page-assets/bg_lite.svg';
import SignUpbg from '../images/looper_group_new.svg';
import Footer from '../Components/common/Footer';
import GetStarted from '../Components/common/GetStarted';
import EndToEndObservability from '../Components/home-page/EndToEndObservability';
import NoVendorLockIn from '../Components/home-page/NoVendorLockIn';
import Features from '../Components/home-page/Features';
import HeroSection from '../Components/home-page/HeroSection';
import Fade from 'react-reveal/Fade';
import SEO from '../Components/common/SEO';
import Pricing from '../Components/home-page/Pricing';
import FeaturesBg from '../images/home-page-assets/features_bg_lighter.svg';
import DistinguishedCustomers from '../Components/home-page/DistinguishedCustomers';
import Instrumentation from '../Components/home-page/Instrumentation';
import VisbilityAndMonitoring from '../Components/home-page/VisbilityAndMonitoring';

function index() {
  return (
    <>
      <Navbar />
      <section className="absolute top-0 -z-50 flex h-[640px] w-full flex-col opacity-30 md:h-[780px] md:opacity-60 lg:h-[864px] xl:h-[1000px]">
        <div
          className="h-full w-full bg-cover bg-bottom bg-no-repeat "
          style={{ backgroundImage: `url('${BackgroundImgNew}')` }}
        />
      </section>

      <div className="z-10 flex min-h-full w-full flex-col">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mx-auto w-[90%] max-w-7xl">
            <HeroSection />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mx-auto w-[90%] max-w-7xl md:w-[85%] ">
            <DemoVideo />
          </div>
        </div>
        <div
          className="flex w-full flex-col items-center justify-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${SignUpbg}')` }}
        >
          <Fade fraction={0.25} distance={'50%'} up>
            <div className="mx-auto w-[90%] max-w-7xl md:w-[85%]">
              <EndToEndObservability />
            </div>
          </Fade>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <Features />
        </div>
        <Fade fraction={0.2} distance={'50%'} up>
          <div className="flex w-full flex-col items-center justify-center bg-dark-900">
            <div className="mx-auto w-[90%] max-w-7xl bg-dark-900 md:w-[85%]">
              <NoVendorLockIn />
            </div>
          </div>
        </Fade>
        <Fade fraction={0.2} distance={'50%'} up>
          <div className="flex w-full flex-col items-center justify-center bg-dark-900">
            <div className="mx-auto w-[90%] max-w-7xl bg-dark-900 md:w-[85%]">
              <Instrumentation />
            </div>
          </div>
        </Fade>
        <Fade fraction={0.2} distance={'50%'} up>
          <div
            className="flex w-full flex-col items-center justify-center bg-dark-900"
            style={{ backgroundImage: `url('${FeaturesBg}')` }}
          >
            <div className="mx-auto w-[90%] max-w-7xl md:w-[85%]">
              <Pricing />
            </div>
          </div>
        </Fade>
        <Fade fraction={0.2} distance={'50%'} up>
          <div className="flex w-full flex-col items-center justify-center bg-dark-900">
            <div className="mx-auto w-[90%] max-w-7xl bg-dark-900 md:w-[85%]">
              <DistinguishedCustomers />
            </div>
          </div>
        </Fade>
        <div
          className="flex w-full flex-col items-center justify-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${FeaturesBg}')` }}
        >
          <Fade fraction={0.25} distance={'50%'} up>
            <div className="mx-auto w-[90%] max-w-7xl md:w-[85%]">
              <VisbilityAndMonitoring />
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const Head = () => (
  <SEO
    title="KloudMate | Microservices Observability Platform"
    description="Application Monitoring and Observability platform for distributed applications and microservices. Create dashboards, analyze logs, trace requests, monitor errors, setup alarms and get insightful metrics. Get started for free!"
  />
);

export default index;
