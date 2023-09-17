import React from 'react';

function GetStarted() {
  return (
    <>
      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center rounded-3xl bg-dark-200 py-8 px-8 text-center text-white md:py-12 lg:py-16">
        <h2 className="mb-5">A Simplified View For Your Complex Architectures</h2>
        <p className="mx-auto w-3/5 text-[17px]">
          Application systems can be intricate by design. Monitoring them doesn’t have to be.
        </p>
        <div className="mt-8 flex w-full flex-col justify-center align-middle md:mt-14 md:flex-row">
          <a
            href="https://app.kloudmate.com/signup"
            className="mr-0  mb-3 rounded-full border border-gray-400/30 py-2 px-5 text-base font-bold text-white hover:bg-dark-100 md:mr-4 md:mb-0 md:px-10 md:py-4"
          >
            Sign up for free
          </a>
          <a
            target="_blank"
            href="https://meet.kloudmate.com/book/kloudmate"
            className="rounded-full bg-primary py-2 px-5 text-base font-bold text-white hover:bg-primary-light md:px-10 md:py-4"
          >
            Book a demo
          </a>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
