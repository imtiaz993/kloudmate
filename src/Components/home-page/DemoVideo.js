import React from 'react';

function DemoVideo() {
  return (
    <>
      <div className="mt-10 flex w-full flex-col items-center md:mb-10 md:mt-16">
        <p className="mb-6 text-center text-sm font-semibold text-white md:text-lg lg:text-2xl">
          Detect Performance Issues & Debug Errors, Before They Impact Your
          Users
        </p>
        <div
          class="wistia_responsive_padding"
          style={{ width: '100%', padding: '56.25% 0 0 0', position: 'relative' }}
        >
          <div
            class="wistia_responsive_wrapper"
            style={{
              height: '100%',
              left: 0,
              position: "absolute",
              top: 0,
              width: '100%',
            }}
          >
            <iframe
              src="https://fast.wistia.net/embed/iframe/ig5mtmtcoi?seo=false&videoFoam=true"
              title="KloudMate - OpenTelemetry Promo Video"
              allow="autoplay; fullscreen"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              class="wistia_embed"
              name="wistia_embed"
              msallowfullscreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        <script
          src="https://fast.wistia.net/assets/external/E-v1.js"
          async
        ></script>
        <div className="mt-8 flex justify-center md:justify-start">
          <a
            data-event-name="Sign Up Intent"
            href="https://app.kloudmate.com/signup"
            className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark md:px-10 md:py-4"
          >
            Get Started for Free. Within Minutes
          </a>
        </div>
      </div>

    </>
  );
}

export default DemoVideo;
