import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function MetricsTracesEventLogs() {
    return (
        <div className="mt-20 mb-16 md:mt-16 md:mb-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:items-center">
                <div className="mt-6 lg:col-span-2 md:w-11/12 md:justify-center">
                    <h2 className="text-xl font-bold text-center md:text-left text-primary md:text-3xl xl:leading-[60px] xl:text-[44px] max-w-[620px]">
                        Unified Observability
                        <span className="inline text-white">
                            , that’s simple & straight forward
                        </span>
                    </h2>
                    <p className="mt-6 text-sm text-gray-400 md:text-base lg:text-lg">
                        Unlock a context-based view with{' '}
                        <span className="font-bold">Metrics</span>,{' '}
                        <span className="font-bold">Events</span>,{' '}
                        <span className="font-bold">Logs</span> and{' '}
                        <span className="font-bold">Traces</span>.
                    </p>
                    <p className="mt-6 text-sm text-gray-400 md:text-base lg:text-lg max-w-[600px]">
                        Monitor activities, quantify performance, stay updated with
                        real-time events, and map end-to-end journeys for comprehensive
                        insights and streamlined visibility.
                    </p>
                    <p className="mt-8 text-sm  text-gray-400 md:text-base lg:text-lg">
                        <span className="font-bold text-primary">Redefine</span> your{' '}
                        <span className="font-bold">Observability</span>{' '}
                        capabilities.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start">
                        <a
                            data-event-name="Sign Up Intent"
                            href="https://app.kloudmate.com/signup"
                            className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary-dark md:px-10 md:py-4"
                        >
                            Get Started for Free
                        </a>
                    </div>
                </div>
                <div className="flex justify-center px-2">
                    <div className="">
                        <div className="grid grid-cols-2 items-center gap-8">
                            <StaticImage
                                className="rounded-2xl"
                                src="../../images/product_assets/metrics.png"
                                objectFit="contain"
                                alt=""
                            />
                            <StaticImage
                                className="rounded-2xl"
                                src="../../images/product_assets/events.png"
                                objectFit="contain"
                                alt=""
                            />
                        </div>
                        <div className="my-3 grid grid-cols-2 items-center gap-8 rounded-xl bg-[#202530] py-1 px-4 text-center md:text-lg font-semibold text-white">
                            <p>Metrics</p> <p>Events</p>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-8">
                            <StaticImage
                                className="rounded-2xl"
                                src="../../images/product_assets/logs.png"
                                objectFit="contain"
                                alt=""
                            />
                            <StaticImage
                                className="rounded-2xl"
                                src="../../images/product_assets/traces.png"
                                objectFit="contain"
                                alt=""
                            />
                        </div>
                        <div className="my-3 grid grid-cols-2 items-center gap-8 rounded-xl bg-[#202530] py-1 px-4 text-center md:text-lg font-semibold text-white">
                            <p>Logs</p> <p>Traces</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
