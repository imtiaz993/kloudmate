import React from 'react';
import Fade from 'react-reveal/Fade';
import FeaturesBg from '../../images/home-page-assets/features_bg_lighter.svg';
import MonitorGIF from '../../images/home-page-assets/monitor.mp4';
import SingleSourceGIF from '../../images/home-page-assets/single-source.gif';

function Features() {
  const data = [
    {
      title: (
        <>
          <div className="text-white lg:w-11/12 xl:w-5/6"><span className='text-primary'>Monitoring</span> them, doesn’t have to be</div>{' '}
        </>
      ),
      content:
        <div className='max-w-[540px]'>
          Observe your microservices for a unified view of your entire stack. Gain unparalleled insights into every layer of your application ecosystem, from frontend to backend, databases to APIs.
        </div>
    },

    {
      title: (
        <>
          <span className="text-white">Achieve a</span>{' '}
          <span className="text-primary">Single-Source-of-Truth</span>{' '}
          <span className="text-white">(SSOT)</span>
        </>
      ),
      content:
        'Gather data from dispersed systems, and consolidate it with KloudMate. Attain a single source of truth for observability, simplified troubleshooting and analysis.',
    },
  ];

  return (
    <section className="relative w-full overflow-visible text-white">
      <section className="top-0 xl:sticky xl:space-y-20">
        <div
          style={{
            backgroundImage: `url("${FeaturesBg}")`,
          }}
          className="top-0 w-full bg-dark-100 bg-opacity-50 bg-cover bg-top xl:sticky xl:min-h-screen"
        >
          <h2 className="w-11/12 mx-auto text-2xl pt-8 text-center font-bold text-white  lg:text-3xl xl:text-4xl">
            Applications can be Complex by Design
          </h2>
          <article className="my-auto mx-auto grid w-[90%] max-w-7xl grid-cols-1  px-4 pb-4 md:w-[85%] md:grid-cols-2 md:items-center  md:pb-10 lg:top-8 lg:pb-8 xl:px-0 lg:pt-4">
            <article className="relative mt-4 space-y-8 px-4 py-5">
              <h2 className="text-2xl font-bold  lg:text-3xl xl:text-4xl">
                {data[0].title}
              </h2>
              <p className="text-grey-400 lg:text-lg">{data[0].content}</p>
            </article>
            <section>
              <Fade up fraction={0.75} distance="100px">
                <video autoPlay muted loop>
                  <source src={MonitorGIF} type="video/mp4" />
                </video>
              </Fade>
            </section>
          </article>
        </div>
        {/* IMAGE 2 - GAIN VISIBILITY IN SECONDS */}
        <div
          style={{
            backgroundImage: `url("${FeaturesBg}")`,
          }}
          className="top-0 flex w-full bg-dark-100 bg-cover bg-top xl:sticky xl:min-h-screen xl:shadow-[0_0px_60px_rgb(0,0,0)]"
        >
          <article className="mx-auto my-auto grid w-[90%] max-w-7xl grid-cols-1 px-4 py-4 md:w-[85%] md:grid-cols-2 md:items-center md:space-x-10 md:py-10 lg:top-8 lg:py-8 xl:space-x-12 xl:px-0">
            <section className="p-4 md:p-3 lg:p-6 xl:p-4">
              <section className="relative">
                <Fade down fraction={0.75} distance="100px">
                  <img
                    className="z-1"
                    src={SingleSourceGIF}
                    alt={data[1].title}
                  />
                </Fade>
              </section>
            </section>
            <section className="relative space-y-8 px-4 py-5">
              <h2 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
                {data[1].title}
              </h2>
              <p className="font-normal text-grey-400 lg:text-lg">
                {data[1].content}
              </p>
              <div className="mt-6 flex justify-start">
                <a
                  data-event-name="Sign Up Intent"
                  href="https://app.kloudmate.com/signup"
                  className="animate-fadeHeroBtn rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark md:px-10 md:py-4"
                >
                  Sign Up, no Credit Card needed.
                </a>
              </div>
            </section>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Features;
