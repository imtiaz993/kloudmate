import React, { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import SectionHeading from '../common/SectionHeading';
import { AddIcon, MinusIcon } from '../common/Icons';

const pricingFAQ = [
  {
    title: 'Do I need to provide a credit card to sign up for a free trial?',
    content: `No, you do not need a credit card to signup. Free trial gives you access to all of the features available with our Pro plan.`,
  },
  {
    title: 'How do I Sign-up for KloudMate?',
    content:
      "After you've registered, follow the on-screen instructions to connect your OpenTelemetry data sources or AWS accounts with KloudMate.",
  },
  {
    title: 'What happens if I go over the usage limit specified in my plan?',
    content:
      "You can use the usage report dashboard under settings to see your usage volume and capacity needs. If you are on a free plan, your account will be automatically paused once you cross the threshold. When an account is paused log ingestion will be stopped and you'll not see any Lambda execution details on the platform. The limits of the free plan reset every billing cycle, allowing you to resume and continue using the platform.\n" +
      'For paid plans, overages are charged separately at the end of the billing period every month.',
  },
  {
    title: 'What payment methods are accepted?',
    content: `For monthly plans, we offer credit card billing only. For annual and business plans, we can provide for alternative forms of payment.`,
  },
  {
    title: 'Can I change plans at any time?',
    content: `You may change your plan at any time. All subscriptions are prepaid, so any increases will be prorated for the remaining days in the month. You can make changes from your Subscription page or contact the KloudMate sales team to help you find the right plan for your needs.`,
  },
  {
    title: 'Our usage is fairly high. Can we get a customized plan?',
    content: (
      <>
        Absolutely! Feel free to reach out to our{' '}
        <Link className="text-primary" to="/help">
          Customer Success team
        </Link>{' '}
        and they'll design something tailored for your usage, in no time!
      </>
    ),
  },
];

const Accordion = ({ title, content }) => {
  const contentRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={() => {}}
      aria-pressed="false"
      key={title}
      className={`w-full rounded-xl border-2  bg-dark-200 px-5 py-4 ${
        open ? ' border-primary' : 'border-dark-300'
      } `}
      onClick={() => setOpen(!open)}
    >
      <div>
        <div className="flex items-start justify-between text-white">
          <h4 className="w-4/5 text-left text-base font-semibold md:text-lg">
            {title}
          </h4>
          {!open ? <AddIcon /> : <MinusIcon />}
        </div>
        <p
          ref={contentRef}
          className={`${
            open && 'mt-4'
          } text-left text-grey-400 transition-all duration-300 md:text-base`}
          style={
            open
              ? { height: contentRef.current?.scrollHeight }
              : { height: 0, opacity: 0, visibility: 'hidden' }
          }
        >
          {content}
        </p>
      </div>
    </div>
  );
};

function FAQ() {
  return (
    <div className="mt-10">
      <div className="space-y-5">
        <SectionHeading heading="FREQUENTLY ASKED QUESTIONS" />
        <h2 className="text-center tracking-wider text-white">Pricing FAQs</h2>
      </div>

      <div className="mt-10 space-y-4">
        {pricingFAQ.map(({ title, content }, idx) => (
          <Accordion title={title} content={content} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
