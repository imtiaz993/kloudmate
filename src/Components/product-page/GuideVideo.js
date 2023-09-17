import React from 'react';

export default function GuideVideo() {
    return (
        <div className="md:mt-16 md:mb-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div className="mt-6 justify-center">
                    <h2 className="text-center text-xl font-bold text-white md:w-[84%] md:text-left md:text-3xl xl:text-[44px] xl:leading-[60px]">
                        Watch a quick instrumentation guide and walkthrough of the platform
                    </h2>
                </div>
                <div className="flex justify-center px-2">
                    <div
                        className="wistia_responsive_padding"
                        style={{
                            width: '100%',
                            padding: '56.25% 0 0 0',
                            position: 'relative',
                        }}
                    >
                        <div
                            className="wistia_responsive_wrapper"
                            style={{
                                height: '100%',
                                left: '0',
                                position: 'absolute',
                                top: 0,
                                width: '100%',
                                zIndex: '1000',
                            }}
                        >
                            <iframe
                                src="https://fast.wistia.net/embed/iframe/hp8iom8ksh?seo=false&videoFoam=true"
                                title="KloudMate [OpenTelemetry] Instrumentation &amp; Demo Video"
                                allow="autoplay; fullscreen"
                                allowtransparency="true"
                                frameborder="0"
                                scrolling="no"
                                className="wistia_embed"
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
                </div>
            </div>
        </div>
    );
}
