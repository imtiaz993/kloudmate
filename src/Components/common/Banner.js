import React from 'react';

const Banner = () => {
  return (
    <div className="w-full bg-blue-500 py-1 text-center text-white">
      🎉 KloudMate is now open for everyone!{' '}
      <a
        className="font-semibold underline decoration-dotted"
        href="https://app.kloudmate.com/signup"
        target="_blank"
      >
        Signup
      </a>{' '}
      today and get access to{' '}
      <span className="font-semibold">3 months Pro plan for FREE</span>! 🥳
    </div>
  );
};

export default Banner;
