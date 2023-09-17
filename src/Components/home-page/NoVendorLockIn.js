import React from 'react';
export default function NoVendorLockIn() {
    return (
        <div className="z-20 my-12 mb-4 bg-dark-900 lg:my-24">
            <div className="space-y-6 text-white">
                <h2 className="mx-auto  text-center text-white md:w-[80%]">
                    Say NO to Vendor <span className="text-primary">Lock-ins</span>
                </h2>
                <p className="mx-auto font-normal md:text-justify text-grey-400 md:max-w-[1000px] lg:text-lg">
                    Stay vendor-neutral using our OpenTelemetry integration, an
                    open-source observability framework that simplifies data collection
                    and sharing across platforms. It establishes standardized telemetry
                    methods, promoting flexibility & autonomy, freeing you from being tied
                    down to expensive monitoring tools.
                </p>
            </div>
        </div>
    );
}
