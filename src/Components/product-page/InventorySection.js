import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TextTransition, { presets } from 'react-text-transition';
import SectionHeading from '../common/SectionHeading';

const InventorySection = () => {
  const [index, setIndex] = useState(0);

  const TEXTS = [
    'AWS Lambda',
    'Amazon API Gateway',
    'Amazon DynamoDB',
    'AWS Step Functions',
    'Amazon SQS',
    'Kinesis Stream',
    'AWS AppSync',
    'Amazon S3',
    'AWS Fargate',
    'Amazon SNS',
    'Amazon EC2',
    'Amazon RDS',
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="container mx-auto mt-10 xl:mt-16">
      <div className="grid-row grid items-center">
        <div className="mt-16 space-y-4 text-center">
          {/* <h3 className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            inventory
          </h3> */}
          <SectionHeading heading="Inventory" />
          <h2 className="mx-auto w-full text-white md:w-3/4">
            Intuitive<span className="text-primary"> Dashboard </span>for your
            AWS Services
          </h2>
          <p className="mx-auto text-grey-400 md:w-[82%] lg:w-[57%]">
            Monitor 15+ (and counting) widely used AWS services. Visualize key
            metrics from a central place.
          </p>
        </div>
        <div className="pb-6">
          <section className="relative">
            <TextTransition
              className="absolute top-[33.6%] left-[50%] z-20 mx-auto flex w-full max-w-2xl translate-y-[-50%] translate-x-[-50%] items-center justify-center text-center text-white lg:top-[30%] xl:top-[34.5%]"
              springConfig={presets.gentle}
            >
              <p className="w-full text-sm font-medium sm:text-lg md:text-2xl">
                {TEXTS[index % TEXTS.length]}
              </p>
            </TextTransition>

            <div className="m-auto mt-6 w-[90%] xl:w-1/2">
              <StaticImage
                className="w-full"
                src="../../images/product_assets/aws_inventory_bg.png"
              />
            </div>
          </section>
        </div>
        <div className="mt-6 grid w-full grid-cols-1 justify-items-center gap-4 space-y-4 md:grid-cols-5 md:space-y-0 lg:mt-16 lg:gap-6">
          <div className="relative flex h-fit w-full flex-col rounded-lg bg-dark-200 md:col-span-3 md:pb-10">
            <p className="text-md order-2 m-6 text-grey-400 md:absolute md:bottom-0 md:w-6/12 xl:w-8/12 xl:max-w-none">
              <span className="text-white">
                Observe each AWS resource from end-to-end,
              </span>{' '}
              to identify performance bottlenecks, resolve issues rapidly, and
              maintain visibility over relevant metrics.
            </p>
            <StaticImage
              className="order-1 ml-auto h-[196px] w-[216px] lg:h-[280px] lg:w-[308px]"
              src="../../images/product_assets/observe_illustration.png"
              alt=""
            />
          </div>
          <div className="relative flex w-full flex-col gap-4 rounded-lg bg-dark-200 md:col-span-2 md:justify-evenly md:px-4 lg:gap-0 lg:pt-4 xl:gap-4">
            <p className="text-md order-2 m-6 my-6 text-grey-400 md:my-0 md:mx-2">
              <span className="text-white">
                Enjoy a bird’s-eye view of resources
              </span>{' '}
              that are in use across cloud regions, to provide accurate
              visualization of the current state of your AWS Account.
            </p>
            <div className="order-1 sm:hidden">
              <StaticImage
                className="relative ml-auto h-40 w-full  sm:h-auto md:object-contain"
                src="../../images/product_assets/birdseye_illustration_mobile.png"
                alt="Birds Eye View Illustration"
              />
            </div>
            <div className="order-1 hidden sm:block">
              <StaticImage
                className="relative ml-auto h-40 w-full sm:h-auto md:object-contain"
                src="../../images/product_assets/birdseye_illustration_desktop.png"
                alt="Birds Eye View Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySection;
