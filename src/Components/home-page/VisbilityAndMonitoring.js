import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Fade } from 'react-reveal';

export default function VisbilityAndMonitoring() {
    return (
        <div className="mt-20 mb-16 md:mt-16 md:mb-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div className="mt-6 md:justify-center">
                    <h2 className="text-xl font-bold text-white md:text-3xl xl:text-[44px] xl:leading-[56px]">
                        Real-time
                        <span className="inline text-primary"> Monitoring</span> and
                        Code-level
                        <span className="inline text-blue"> Visibility</span>
                    </h2>
                    <p className="mt-6 animate-fadeHeroParagraph text-sm text-gray-400 md:text-base lg:text-lg">
                        Combine the power of OpenTelemetry data with KloudMate's real-time
                        monitoring, to create a robust monitoring solution. Stay on top of
                        your distributed application's performance and take proactive
                        measures to ensure smooth operations.
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
                <div className="flex justify-center px-2">
                    <section className="p-4 md:p-3 lg:p-6 xl:p-4">
                        <section className="relative">
                            <Fade up fraction={0.75} distance="100px">
                                <StaticImage
                                    objectFit="contain"
                                    className="z-1"
                                    src="../../images/home-page-assets/visibility-and-monitoring.png"
                                    alt={""}
                                />
                            </Fade>
                            <article className="absolute -right-[9%] top-[-7%] z-10 w-[44.5%]">
                                <Fade fraction={0.75} down>
                                    <StaticImage
                                        objectFit="contain"
                                        src="../../images/home-page-assets/code-vsibility.png"
                                        alt="code-vsibility"
                                    />
                                </Fade>
                            </article>
                            <div className="absolute -left-[10%] bottom-[-7%] z-10 w-[44.5%]">
                                <Fade fraction={0.75} left>
                                    <StaticImage
                                        objectFit="contain"
                                        src="../../images/home-page-assets/realtime-monitoring.png"
                                        alt="realtime-monitoring"
                                    />
                                </Fade>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}
