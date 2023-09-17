import React from 'react';

function Temp() {
  return (
    <div className="mx-auto w-[85%] space-y-10 text-center leading-[25.6px] text-grey-400 md:w-[95%] md:space-y-12 lg:w-full">
      <div className="space-y-4">
        <p>
          After nearly 3 months of being in 'closed beta',{' '}
          <span className="font-bold tracking-wider text-white">
            {' '}
            KloudMate{' '}
          </span>{' '}
          is finally open for registrations, albeit for a limited period.
        </p>
        <p>
          We thank everyone who joined us till now and shared their inputs &
          experience of the platform. Your feedback has helped us build some
          remarkable features and squash some elusive bugs in the application.
        </p>
        <p>
          We are now entering what we call the{' '}
          <span className="font-bold tracking-wider text-white">
            {' '}
            'Open Beta'{' '}
          </span>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-primary">What is Open Beta?</h3>
        <p>
          For the next 15 to 20 days, we are allowing anyone interested in
          Observability of their Serverless infrastructure, to{' '}
          <a
            className="font-bold tracking-wider text-white underline"
            href="https://kloudmate.dev/signup"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            register
          </a>{' '}
          for free!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <button className="rounded-full bg-primary py-4 px-10 font-bold tracking-wider text-white">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Temp;
