import React, { useState } from 'react';
import SecurityIcon from '../../images/product_assets/smart_insight/security_logo.png';
import LogoR from '../../images/product_assets/smart_insight/logo_r.png';
import LogoPE from '../../images/product_assets/smart_insight/logo_pe.png';
import LogoCO from '../../images/product_assets/smart_insight/logo_co.png';
// import LogoSus from '../../images/product_assets/smart_insight/logo_s.png';
import LogoOE from '../../images/product_assets/smart_insight/logo_oe.png';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionHeading from '../common/SectionHeading';

const SmartInsightSection = ({ tab1, tab2, tab3, tab4, tab5, tab6 }) => {
  const Security = getImage(tab1);
  const Reliability = getImage(tab2);
  const PerformanceEfficiency = getImage(tab3);
  const CostOptimization = getImage(tab4);
  // const Sustainability = getImage(tab5);
  const OperationalExcellence = getImage(tab6);
  const [select, setSelect] = useState(0);

  const options = [
    {
      btnHeader: 'Security',
      text: 'These insights are centered around protection of systems and data. Data integrity, user roles, and permissions are the key areas, and control systems are used, to highlight wherever security vulnerabilities exist.',
      imgURL: Security,
      logo: SecurityIcon,
    },
    {
      btnHeader: 'Reliability',
      text: 'This section focuses on the overall system performance and how it recovers in the event of a breakdown. The primary themes are system design, redundancy, recovery from failure, and how flexible the architecture is, to adapt for ever evolving use cases.',
      imgURL: Reliability,
      logo: LogoR,
    },
    {
      btnHeader: (
        <>
          Performance <span className="hidden xl:inline">Efficiency</span>
        </>
      ),
      header: 'Performance Efficiency',
      text: 'A key tenet that prioritises effective alignment and arrangement of computing, network, and IT resources. The emphasis is on appropriate selection and design of workloads, performance monitoring and tuning, and continuous maintenance.',
      imgURL: PerformanceEfficiency,
      logo: LogoPE,
    },
    {
      btnHeader: (
        <>
          Cost <span className="hidden xl:inline">Optimization</span>
        </>
      ),
      header: 'Cost Optimization',
      text: 'Insights that outline the best practices for preventing non-essential costs and increasing the value of your cloud environment, over a longer period of time. Optimization of resources in alignment with business requirements, and scalability of workloads without raising expenses, are the main subjects here.',
      imgURL: CostOptimization,
      logo: LogoCO,
    },
    // {
    //   header: 'Sustainability',
    //   text: 'The pillar with best practices on continuous monitoring and improvement of running workloads. Primary subjects are automation, event response plan, and standard operating procedures (SOPs).',
    //   imgURL: Sustainability,
    //   logo: LogoSus,
    // },
    {
      btnHeader: (
        <>
          Operational <span className="hidden xl:inline">Excellence</span>
        </>
      ),
      header: 'Operational Excellence',
      text: 'These are a set of rules that contain best practices for continuous monitoring and improvement of the cloud environment and workloads. Automation, incident response plans, and standard operating procedures (SOPs) are the key focus areas.',
      imgURL: OperationalExcellence,
      logo: LogoOE,
    },
  ];

  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-1 gap-5">
        <div className="mx-auto flex w-full flex-col space-y-5 text-center md:w-[81%] lg:w-full">
          {/* <p className="text-sm font-bold uppercase tracking-[0.2rem] text-primary">
            smart insights
          </p> */}
          <SectionHeading heading="Smart Insights" />
          <h2 className="mx-auto font-bold text-white">
            <span className="text-primary">Smart Insights</span> for your
            Infrastructure
          </h2>
          <p className="mx-auto text-grey-400 lg:w-[70%]">
            Smart Insights constantly help you compare your architectures to
            best practices and find room for improvement. Get actionable
            insights from hundreds of pre-configured rules, saving you time from
            having to manually determine the condition of the end-to-end
            architecture of your application.
          </p>
          <p className="mx-auto text-grey-400 lg:w-[72%]">
            Consider <span className="text-primary">‘Smart Insights’</span> as
            the guide, that offers invaluable information and direction,
            throughout the lifecycle of developing, troubleshooting, and
            maintaining your application.
          </p>
        </div>
        {/* tab */}
        <div className="container mx-auto rounded-2xl bg-[#191C24] md:mt-10 xl:mt-20 ">
          <div className="flex w-full gap-10 overflow-x-auto px-4 align-middle text-grey-400 scrollbar-hide xl:gap-4">
            {options.map((opt, idx) => (
              <button
                onClick={() => setSelect(idx)}
                className={`transition-colors duration-300 ${
                  select === idx
                    ? 'w-full cursor-pointer border-b-4 border-primary py-4 px-7 text-white md:px-0'
                    : 'w-full cursor-pointer border-b-4 border-transparent px-7 md:px-0'
                }`}
              >
                {opt.btnHeader}
              </button>
            ))}
          </div>
        </div>
        {/* card */}
        <div className="mt-5 items-center rounded-2xl bg-[#191C24]">
          <div className="flex flex-col items-center p-4 md:flex-row-reverse">
            <div className="flex w-full flex-col pl-5 text-left lg:mx-11 lg:space-y-4">
              <img
                src={options[select].logo}
                className="w-[12%] lg:w-[7%]"
                alt=""
              />
              <h1 className="mt-5 text-2xl font-bold text-white lg:text-4xl">
                {options[select].header
                  ? options[select].header
                  : options[select].btnHeader}
              </h1>
              <p className="mt-2 text-grey-400">{options[select].text}</p>
            </div>
            <div className="mt-5 md:mt-8 md:w-[95%] lg:ml-11">
              <GatsbyImage image={options[select].imgURL} alt="alarms" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartInsightSection;
