import React from 'react';

const JoinUsSection = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid justify-items-center">
        <div className="flex w-full flex-col items-center space-y-4 p-4 md:my-8 md:space-y-7">
          <div className="text-center lg:w-4/5">
            <h2 className="mb-5 font-bold text-white">Join us</h2>
            <p className="text-white lg:text-lg">
              We’re always looking for self-starters. If you are one, we might
              just click.
            </p>
            <p className="mt-4 text-white lg:text-lg">
              Work from anywhere, flexi-work timings, top-of-the-line health
              insurance, forced annual paid-time-off, global exposure. Need we
              say more? Send over your profile, we’ll be in touch sooner than
              you’d expect.
            </p>
          </div>

          <a
            href=" https://kloudmate.springrecruit.com/"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-white p-4 text-center font-bold md:w-1/3 xl:w-1/6"
          >
            {' '}
            View openings{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
