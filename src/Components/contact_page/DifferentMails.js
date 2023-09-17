import React from 'react';
import SectionHeading from '../common/SectionHeading';

function DifferentMails() {
  return (
    <div className="mx-auto mt-40 mb-32 flex w-full max-w-5xl flex-col justify-between rounded-2xl bg-dark-200 p-5 py-8 text-center ">
      <SectionHeading heading="Contact Us" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 ">
        <div>
          <h1 className="my-4 text-2xl font-bold text-white">Media</h1>
          <a
            href="mailto:media@kloudmate.com?subject=Media%20Enquiry"
            className="text-gray-500"
          >
            media@kloudmate.com
          </a>
        </div>
        <div>
          <h1 className="my-4 text-2xl font-bold text-white">Analysts</h1>
          <a
            href="mailto:analysts@kloudmate.com?subject=Analyst%20Enquiry"
            className="text-gray-500"
          >
            analysts@kloudmate.com
          </a>
        </div>
        <div>
          <h1 className="my-4 text-2xl font-bold text-white">Careers</h1>
          <a
            href="mailto:people@kloudmate.com?subject=Job%20Application"
            className="text-gray-500"
          >
            people@kloudmate.com
          </a>
        </div>
      </div>
    </div>
  );
}
export default DifferentMails;
