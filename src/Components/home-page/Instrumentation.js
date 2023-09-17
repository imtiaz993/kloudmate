import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import GIF from '../../images/home-page-assets/end-to-end-observability.gif';

export default function Instrumentation() {
    return (
        <div className="mt-20 mb-16 md:mt-16 md:mb-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div className="mt-6 md:justify-center">
                    <div>
                        <h2 className="text-xl font-bold text-white md:text-3xl xl:text-[44px]">
                            Instrumentation
                        </h2>
                        <p className="mx-auto mt-8 mb-4 font-normal text-grey-400 lg:text-lg">
                            Code instrumentation compatibility with a wide array of popular
                            programming languages. Read more in our{' '}
                            <a
                                className="underline"
                                target="_blank"
                                href="https://docs.kloudmate.com/opentelemetry-support-in-kloudmate"
                            >
                                documentation
                            </a>
                            .
                        </p>
                        <div className="mt-6 flex justify-start">
                            <a
                                data-event-name="Sign Up Intent"
                                href="https://app.kloudmate.com/signup"
                                className="animate-fadeHeroBtn rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark md:px-10 md:py-4"
                            >
                                Get Started for Free
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center px-2">
                    <StaticImage
                        objectFit="contain"
                        className="z-1 overflow-hidden rounded-2xl"
                        src="../../images/home-page-assets/Instrumentation_languages.png"
                        alt={'instrumentation'}
                    />
                </div>
            </div>
        </div>
    );
}
