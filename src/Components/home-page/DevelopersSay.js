import React, { useCallback, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import SectionHeading from '../common/SectionHeading';

export default function DevelopersSay() {
  const [devIndex, setDevIndex] = useState(0);
  const queryResult = useStaticQuery(graphql`
    query testimonialAvatarsQuery {
      allFile(
        filter: { relativeDirectory: { in: "home-page-assets/testimonials" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 150
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);
  const images = queryResult.allFile.edges;

  const developers = [
    {
      name: 'Osazeme Usen',
      role: 'Sr. Software Engineer, Andela, US',
      avatar: 'osazame_usen',
      logo: 'andela_logo',
      field: 'HireTech',
      text: 'The interface is very intuitive and user friendly. KloudMate solves the observability pain point when working with distributed systems and various cloud ecosystems. This is the tool I wish I had, while triaging and resolving application issues.',
    },

    {
      name: 'Prashant Jha',
      role: 'Senior SRE, Unacademy, India',
      avatar: 'prashant',
      logo: 'unacademy_logo',
      field: 'EdTech',
      text: 'KloudMate offers a consolidated view of all my cloud resources. The interface is very user friendly. One thing I want to highlight is the way we have tracing and monitoring of distributed systems, with logs, metrics and tracing, all in one place.',
    },
    {
      name: 'Abhi Chacko',
      role: 'Founder, Ostrum Tech, UK',
      avatar: 'abhi_chacko',
      logo: 'ostrum_tech_logo',
      field: 'Traveltech',
      text: "Love KloudMate’s focus on application monitoring and performance. Their platform has helped us a lot in pin-pointing issues and resolving them real quick.",
    },
  ];
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="z-20 my-12 mb-4 bg-dark-900 lg:my-24">
      <div className="space-y-6 text-center text-white">
        <SectionHeading heading="What Our Users Say" />
        <h2 className="mx-auto text-white md:w-[80%]">
          Loved by <span className="text-[#F47715]">Developers</span>,{' '}
          <span className="text-[#4A6CFD]">DevOps Engineers</span> and{' '}
          <span className="text-[#EE446D]">SREs</span> around the world.
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        ref={sliderRef}
        onSlideChange={(slide) => setDevIndex(slide.realIndex)}
        speed={700}
        spaceBetween={50}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
      >
        {developers.map((dev, index) => (
          <SwiperSlide key={index}>
            <div className="mt-7 items-center md:flex">
              <div className="relative mt-14 space-y-8 border-gray-800 border-opacity-80 font-bold text-white md:w-[70%] md:space-x-4 md:border-l-4 md:pt-6 md:pb-12 md:pl-2 xl:border-l-[10px] xl:pl-8">
                <div
                  className="md:h-18 md:w-18 relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-6xl md:-left-[40%] xl:-left-[45%]"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  <span className="mt-7">“</span>
                </div>
                <p className="mx-auto min-h-[16rem] w-[90%] text-center text-lg font-medium md:min-h-0 md:text-left md:text-xl md:leading-[28px] xl:w-4/5 xl:text-[30px] xl:leading-[44.8px]">
                  {dev.text}
                </p>
              </div>
              {/* Developer Testimonial Slides: */}

              {/* Developer Testimonial Cards */}
              <div className="mt-6 flex flex-col items-center justify-center space-y-7 rounded-2xl bg-[rgb(33,37,48)] px-8 py-5 text-white md:h-80 md:w-96 xl:h-[22rem] xl:w-96">
                {/* Profile Picture */}

                <div className="mb-4 flex w-full items-center justify-between lg:-mt-2 lg:mb-6">
                  <div className="rounded-3xl bg-[#18181a] px-4 py-2">
                    <h4 className="section_heading text-xs font-bold tracking-wider text-primary">
                      {dev.field.toUpperCase()}
                    </h4>
                  </div>
                  <GatsbyImage
                    objectFit="contain"
                    alt={dev.role}
                    className="h-8 w-28 fill-white object-contain"
                    image={getImage(
                      images.find((i) => i.node.name === dev.logo).node
                        .childImageSharp.gatsbyImageData
                    )}
                  />
                </div>
                <GatsbyImage
                  alt={dev.name}
                  className="h-20 w-20 rounded-full bg-white object-cover xl:h-24 xl:w-24"
                  image={getImage(
                    images.find((i) => i.node.name === dev.avatar).node
                      .childImageSharp.gatsbyImageData
                  )}
                />
                <div className="!mt-12 text-center">
                  <h3 className="text-xl font-semibold">{dev.name}</h3>
                  <p className="text-grey-400">{dev.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex w-full items-start justify-center space-x-4 text-white">
        <button
          className="rounded-full border border-[#3d3d47] p-3"
          onClick={handlePrev}
        >
          <IoArrowBack />
        </button>
        <div className="space-x-3 text-3xl">
          {developers.map((_, idx) => (
            <span
              key={idx}
              className={`${devIndex === idx ? 'text-white' : 'text-[#3d3d47]'
                }`}
            >
              •
            </span>
          ))}
        </div>
        <button
          className="rounded-full border border-[#3d3d47] p-3"
          onClick={handleNext}
        >
          <IoArrowForward />
        </button>
      </div>

      {/* <div className="mt-4 flex items-center justify-center space-x-4 md:hidden ">
        <button
          className="rounded-full border border-[#3d3d47] p-3"
          onClick={handlePrevBtn}
        >
          {' '}
          <IoArrowBack />{' '}
        </button>
        <div className="space-x-3 text-3xl">
          {developers.map((_, idx) => (
            <span
              key={idx}
              className={`${
                devIndex === idx ? 'text-white' : 'text-[#3d3d47]'
              }`}
            >
              •
            </span>
          ))}
        </div>
        <button
          className="rounded-full border border-[#3d3d47] p-3"
          onClick={handleNextBtn}
        >
          {' '}
          <IoArrowForward />{' '}
        </button>
      </div> */}
    </div>
  );
}
